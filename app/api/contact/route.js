import { validateContactForm } from '@/app/lib/contactForm';

async function verifyTurnstile(token) {
  if (!token || typeof token !== 'string') {
    return false;
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY manquant');
    return false;
  }

  const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = await verifyRes.json();
  return Boolean(data.success);
}

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Honeypot anti-bot (champ caché, doit rester vide)
    const honeypot = formData.get('website');
    if (honeypot && String(honeypot).trim() !== '') {
      return Response.json({ message: 'Requête refusée' }, { status: 400 });
    }

    const turnstileToken = formData.get('cf-turnstile-response');
    const turnstileOk = await verifyTurnstile(turnstileToken);
    if (!turnstileOk) {
      return Response.json(
        {
          message:
            'Validation de sécurité échouée. Veuillez cocher le CAPTCHA et réessayer.',
        },
        { status: 400 }
      );
    }

    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
      isUrgent: formData.get('isUrgent') === 'true' || formData.get('isUrgent') === 'on',
      fileName: formData.get('fileName') ? String(formData.get('fileName')) : null,
    };

    const { valid, errors, sanitized } = validateContactForm(payload);
    if (!valid) {
      return Response.json(
        { message: errors[0] ?? 'Données du formulaire invalides' },
        { status: 400 }
      );
    }

    // Plus d’envoi n8n : validation Turnstile + champs uniquement
    return Response.json({
      message: 'Validation réussie',
      ok: true,
      sanitized,
    });
  } catch (error) {
    console.error('Erreur API contact:', error);
    return Response.json({ message: 'Erreur du serveur' }, { status: 500 });
  }
}
