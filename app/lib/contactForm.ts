import { SITE } from './site';

/** Validation et construction du message WhatsApp pour le formulaire contact */

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isUrgent: boolean;
  fileName?: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const MAX = {
  name: 120,
  email: 254,
  phone: 30,
  subject: 120,
  message: 500,
  fileName: 200,
} as const;

/** Supprime caractères de contrôle et limite la longueur */
export function sanitizeField(value: string, max: number): string {
  return value
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim()
    .slice(0, max);
}

export function validateContactForm(data: ContactFormPayload): {
  valid: boolean;
  errors: string[];
  sanitized: ContactFormPayload;
} {
  const errors: string[] = [];

  const sanitized: ContactFormPayload = {
    name: sanitizeField(data.name ?? '', MAX.name),
    email: sanitizeField(data.email ?? '', MAX.email).toLowerCase(),
    phone: sanitizeField(data.phone ?? '', MAX.phone),
    subject: sanitizeField(data.subject ?? '', MAX.subject),
    message: sanitizeField(data.message ?? '', MAX.message),
    isUrgent: Boolean(data.isUrgent),
    fileName: data.fileName ? sanitizeField(data.fileName, MAX.fileName) : null,
  };

  if (!sanitized.name || sanitized.name.length < 2) {
    errors.push('Nom invalide');
  }
  if (!EMAIL_RE.test(sanitized.email)) {
    errors.push('Adresse e-mail invalide');
  }
  const phoneDigits = sanitized.phone.replace(/\D/g, '');
  if (phoneDigits.length < 9 || phoneDigits.length > 15) {
    errors.push('Numéro de téléphone invalide');
  }
  if (!sanitized.subject) {
    errors.push('Veuillez sélectionner un service');
  }
  if (!sanitized.message || sanitized.message.length < 10) {
    errors.push('Message trop court (minimum 10 caractères)');
  }

  return { valid: errors.length === 0, errors, sanitized };
}

export function buildWhatsAppMessage(data: ContactFormPayload): string {
  const lines = [
    'Bonjour Smart Rénov,',
    '',
    'Nouvelle demande depuis le site web :',
    '',
    `Nom : ${data.name}`,
    `E-mail : ${data.email}`,
    `Téléphone : ${data.phone}`,
    `Service : ${data.subject}`,
    `Urgent : ${data.isUrgent ? 'Oui' : 'Non'}`,
  ];

  if (data.fileName) {
    lines.push(`Fichier à transmettre : ${data.fileName} (merci de l’envoyer en pièce jointe sur WhatsApp)`);
  }

  lines.push('', 'Message :', data.message, '', '— Envoyé via srs.cm');

  return lines.join('\n');
}

/** Numéro WhatsApp business (sans +) — aligné sur SITE.phone */
export const WHATSAPP_NUMBER = SITE.phone.replace(/\D/g, '');

export function buildWhatsAppUrl(data: ContactFormPayload): string {
  const text = encodeURIComponent(buildWhatsAppMessage(data));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
