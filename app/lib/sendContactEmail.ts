import nodemailer from 'nodemailer';
import { buildWhatsAppMessage, type ContactFormPayload } from './contactForm';
import { SITE } from './site';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export type ContactEmailAttachment = {
  filename: string;
  content: Buffer;
};

function buildContactEmailHtml(data: ContactFormPayload, hasAttachment = false): string {
  const rows = [
    ['Nom complet', data.name],
    ['Adresse e-mail', data.email],
    ['Téléphone', data.phone],
    ['Service demandé', data.subject],
    ['Demande urgente', data.isUrgent ? 'Oui' : 'Non'],
  ];

  if (data.fileName) {
    rows.push([
      'Pièce jointe',
      hasAttachment
        ? `${data.fileName} (fichier joint à cet e-mail)`
        : `${data.fileName} (non joint — à transmettre sur WhatsApp)`,
    ]);
  }

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;max-width:640px;">
      <h2 style="margin:0 0 16px;color:#0b3d91;">Nouvelle demande depuis le site web</h2>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">${tableRows}</table>
      <p style="margin:0 0 8px;font-weight:600;">Message :</p>
      <p style="margin:0;padding:12px;background:#f3f4f6;border-left:4px solid #ef7c1a;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `.trim();
}

function getEmailContent(data: ContactFormPayload, hasAttachment: boolean) {
  const subjectPrefix = data.isUrgent ? 'URGENT — ' : '';
  return {
    subject: `[Site web] ${subjectPrefix}${data.subject} — ${data.name}`,
    text: buildWhatsAppMessage(data),
    html: buildContactEmailHtml(data, hasAttachment),
    replyTo: data.email,
    to: process.env.CONTACT_EMAIL_TO ?? SITE.email,
    from:
      process.env.CONTACT_EMAIL_FROM ??
      `Smart Rénov <noreply@${SITE.email.split('@')[1] ?? 'smartrenov237.com'}>`,
  };
}

async function sendViaResend(
  data: ContactFormPayload,
  attachment?: ContactEmailAttachment | null
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const { from, to, subject, text, html, replyTo } = getEmailContent(data, Boolean(attachment));

  const emailBody: Record<string, unknown> = {
    from,
    to: [to],
    reply_to: replyTo,
    subject,
    text,
    html,
  };

  if (attachment) {
    emailBody.attachments = [
      {
        filename: attachment.filename,
        content: attachment.content.toString('base64'),
      },
    ];
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailBody),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    console.error('[contact] Échec Resend:', response.status, detail);
    throw new Error('EMAIL_SEND_FAILED');
  }
}

async function sendViaSmtp(
  data: ContactFormPayload,
  attachment?: ContactEmailAttachment | null
): Promise<void> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) return;

  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE !== 'false';

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const { from, to, subject, text, html, replyTo } = getEmailContent(data, Boolean(attachment));

  await transporter.sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html,
    attachments: attachment
      ? [
          {
            filename: attachment.filename,
            content: attachment.content,
          },
        ]
      : undefined,
  });
}

export function isContactEmailConfigured(): boolean {
  if (process.env.RESEND_API_KEY) return true;
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

export async function sendContactEmail(
  data: ContactFormPayload,
  attachment?: ContactEmailAttachment | null
): Promise<void> {
  if (!isContactEmailConfigured()) {
    console.error(
      '[contact] Aucun service e-mail configuré. Définissez RESEND_API_KEY ou SMTP_HOST/SMTP_USER/SMTP_PASS dans .env.local'
    );
    throw new Error('EMAIL_NOT_CONFIGURED');
  }

  if (process.env.RESEND_API_KEY) {
    await sendViaResend(data, attachment);
    return;
  }

  await sendViaSmtp(data, attachment);
}
