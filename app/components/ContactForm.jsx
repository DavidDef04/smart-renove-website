'use client';
import { useState, useRef, useCallback } from 'react';
import Script from 'next/script';

const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTurnstileValid, setIsTurnstileValid] = useState(false);
  const turnstileRef = useRef(null);

  const submitForm = useCallback(async (formData) => {
    if (!isTurnstileValid) {
      throw new Error('Veuillez valider le CAPTCHA');
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      
      // Convertir l'objet formData en FormData
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== undefined) {
          data.append(key, formData[key]);
        }
      }

      // Ajouter le token Turnstile
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
        throw new Error(errorData.message || 'Erreur lors de l\'envoi du formulaire');
      }

      return await response.json();
    } finally {
      setIsSubmitting(false);
    }
  }, [isTurnstileValid]);

  const resetTurnstile = useCallback(() => {
    if (turnstileRef.current?.reset) {
      turnstileRef.current.reset();
      setIsTurnstileValid(false);
    }
  }, []);

  const TurnstileWidget = useCallback(() => {
    // Définir les callbacks globaux pour Turnstile
    if (typeof window !== 'undefined') {
      window.onTurnstileSuccess = () => setIsTurnstileValid(true);
      window.onTurnstileExpired = () => setIsTurnstileValid(false);
      window.onTurnstileError = () => setIsTurnstileValid(false);
    }

    return (
      <div className="mt-4">
        <Script 
          src="https://challenges.cloudflare.com/turnstile/v0/api.js" 
          async 
          defer 
          onLoad={() => {
            // Réinitialiser l'état de validation au chargement
            setIsTurnstileValid(false);
          }}
        />
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAACC7j2As0DNR32Og"}
          data-callback="onTurnstileSuccess"
          data-expired-callback="onTurnstileExpired"
          data-error-callback="onTurnstileError"
          ref={turnstileRef}
        />
      </div>
    );
  }, []);

  return {
    isSubmitting,
    isTurnstileValid,
    submitForm,
    resetTurnstile,
    TurnstileWidget,
  };
};

export default useContactForm;
