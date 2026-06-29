'use client';

import { useState, useRef, useCallback } from 'react';
import Script from 'next/script';
import { buildWhatsAppUrl, validateContactForm } from '@/app/lib/contactForm';

const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTurnstileValid, setIsTurnstileValid] = useState(false);
  const [widgetResetKey, setWidgetResetKey] = useState(0);
  const turnstileRef = useRef(null);

  const submitForm = useCallback(
    async (formData) => {
      if (!isTurnstileValid) {
        throw new Error('Veuillez valider le CAPTCHA');
      }

      const { valid, errors, sanitized } = validateContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        isUrgent: formData.isUrgent,
        fileName: formData.fileName ?? null,
      });

      if (!valid) {
        throw new Error(errors[0] ?? 'Formulaire invalide');
      }

      setIsSubmitting(true);

      try {
        const data = new FormData();
        data.append('name', sanitized.name);
        data.append('email', sanitized.email);
        data.append('phone', sanitized.phone);
        data.append('subject', sanitized.subject);
        data.append('message', sanitized.message);
        data.append('isUrgent', sanitized.isUrgent ? 'true' : 'false');
        if (sanitized.fileName) {
          data.append('fileName', sanitized.fileName);
        }
        if (formData.file instanceof File && formData.file.size > 0) {
          data.append('attachment', formData.file);
        }
        const honeypotEl = document.querySelector('input[name="website"]');
        const honeypot = honeypotEl?.value ?? '';
        data.append('website', honeypot);

        const turnstileToken = document.querySelector('[name="cf-turnstile-response"]')?.value;
        if (turnstileToken) {
          data.append('cf-turnstile-response', turnstileToken);
        }

        const response = await fetch('/api/contact', {
          method: 'POST',
          body: data,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || 'Validation échouée');
        }

        const whatsappUrl = buildWhatsAppUrl(sanitized);
        return { ok: true, whatsappUrl };
      } finally {
        setIsSubmitting(false);
      }
    },
    [isTurnstileValid]
  );

  const resetTurnstile = useCallback(() => {
    try {
      setWidgetResetKey((prev) => prev + 1);
      setIsTurnstileValid(false);

      const turnstileContainer = document.querySelector('.cf-turnstile');
      if (turnstileContainer && window.turnstile) {
        const widgetId = turnstileContainer.getAttribute('data-turnstile-id');
        if (widgetId) {
          window.turnstile.reset(widgetId);
        }
      }
    } catch (error) {
      console.warn('Erreur lors de la réinitialisation Turnstile:', error);
      setIsTurnstileValid(false);
    }
  }, []);

  const TurnstileWidget = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.onTurnstileSuccess = () => setIsTurnstileValid(true);
      window.onTurnstileExpired = () => setIsTurnstileValid(false);
      window.onTurnstileError = () => setIsTurnstileValid(false);
    }

    return (
      <div key={widgetResetKey}>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          onLoad={() => setIsTurnstileValid(false)}
        />
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAACC7j2As0DNR32Og'}
          data-callback="onTurnstileSuccess"
          data-expired-callback="onTurnstileExpired"
          data-error-callback="onTurnstileError"
          ref={turnstileRef}
        />
      </div>
    );
  }, [widgetResetKey]);

  return {
    isSubmitting,
    isTurnstileValid,
    submitForm,
    resetTurnstile,
    TurnstileWidget,
  };
};

export default useContactForm;
