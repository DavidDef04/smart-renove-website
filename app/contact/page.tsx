'use client';

import { useState, useCallback, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  Upload,
  ChevronDown,
  MessageCircle,
} from 'lucide-react';
import Footer from '@/app/components/Footer';
import ConversionBand from '@/app/components/ConversionBand';
import SocialLinks from '@/app/components/SocialLinks';
import useContactForm from '@/app/components/ContactForm';
import PageHero from '@/app/components/ui/PageHero';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { SITE_IMAGES } from '@/app/data/siteImages';
import { SITE } from '@/app/lib/site';
import { validateContactForm } from '@/app/lib/contactForm';

const CONTACT_SUBJECTS = [
  'Rénovation complète (maison)',
  'Rénovation complète (local commercial)',
  'Rénovation partielle',
  'Menuiserie aluminium',
  'Demande de devis',
  "Demande d'information",
  'Prise de rendez-vous',
  'Service après-vente',
  'Autre demande',
] as const;

const FAQ_ITEMS = [
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      'Nos bureaux sont ouverts du lundi au vendredi de 8h à 19h et le samedi de 9h à 17h. Notre équipe est également disponible en dehors de ces horaires sur rendez-vous.',
  },
  {
    question: 'Quel est le délai de réponse à une demande de contact ?',
    answer: `Nous nous engageons à vous répondre dans les 24 à 48 heures ouvrables suivant votre demande. Pour les urgences, appelez-nous directement au ${SITE.phoneDisplay}.`,
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer:
      'Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous vous proposerons une étude personnalisée de votre projet et un devis détaillé sous 48h.',
  },
  {
    question: "Quelles sont les zones d'intervention ?",
    answer:
      "Nous intervenons principalement à Douala et dans les grandes villes du Cameroun. Pour les projets d'envergure, nous pouvons également nous déplacer sur l'ensemble du territoire.",
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer:
      'Nous acceptons les paiements par carte bancaire, virement, chèque et espèces. Des facilités de paiement peuvent être proposées pour les montants importants.',
  },
] as const;

function formatPhoneInput(value: string) {
  let digits = value.replace(/\D/g, '').substring(0, 12);
  return digits.replace(/(\d{1,3})?(\d{0,3})?(\d{0,3})?(\d{0,3})?/, (_match, p1, p2, p3, p4) => {
    const parts = [p1, p2, p3, p4].filter(Boolean);
    return parts.join(' ').trim();
  });
}

function ContactPageContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null as File | null,
    isUrgent: false,
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formProgress, setFormProgress] = useState(0);

  const { isSubmitting, isTurnstileValid, submitForm, resetTurnstile, TurnstileWidget } =
    useContactForm();

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      const match = CONTACT_SUBJECTS.find(
        (s) => s.toLowerCase() === decodeURIComponent(subjectParam).toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        subject: match ?? decodeURIComponent(subjectParam),
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => {
      setIsSubmitted(false);
      resetTurnstile();
    }, 10000);
    return () => clearTimeout(timer);
  }, [isSubmitted, resetTurnstile]);

  const calculateProgress = useCallback(() => {
    const fields = [
      formData.name,
      formData.email,
      formData.phone,
      formData.subject,
      formData.message,
    ];
    const filled = fields.filter((f) => f && f.trim().length > 0).length;
    return (filled / fields.length) * 100;
  }, [formData]);

  useEffect(() => {
    setFormProgress(calculateProgress());
  }, [formData, calculateProgress]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    const limitedValue =
      name === 'message' && value.length > 500 ? value.slice(0, 500) : value;
    setFormData((prev) => ({ ...prev, [name]: limitedValue }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      file: null,
      isUrgent: false,
    });
    setFileName('');
    resetTurnstile();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const { valid, errors } = validateContactForm({
      ...formData,
      fileName: fileName || null,
    });
    if (!valid) {
      setError(errors[0] ?? 'Veuillez corriger le formulaire');
      return;
    }

    try {
      await submitForm({ ...formData, fileName: fileName || null });
      setIsSubmitted(true);
      resetTurnstile();
      setTimeout(() => {
        resetForm();
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      resetTurnstile();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-soft)]">
      <PageHero
        index="09"
        kicker="Contact"
        image={SITE_IMAGES.cta}
        imageAlt="Contacter Smart Rénov"
        title={
          <>
            Parlons de votre <em>projet</em>
          </>
        }
        description="Rénovation complète ou partielle — maison, appartement ou local commercial. Devis gratuit et réponse rapide à Douala."
        align="left"
      >
        <a href="#formulaire-contact" className="sr-btn sr-btn--primary">
          <Send className="h-4 w-4" />
          Envoyer un message
        </a>
        <a href={`tel:${SITE.phone}`} className="sr-btn sr-btn--ghost-light">
          <Phone className="h-4 w-4" />
          {SITE.phoneDisplay}
        </a>
      </PageHero>

      <section id="formulaire-contact" className="sr-section sr-section--white sr-grid-bg scroll-mt-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Formulaire */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                index="09"
                kicker="Formulaire"
                title={
                  <>
                    Écrivez-<em>nous</em>
                  </>
                }
                description="Remplissez le formulaire ci-dessous. Votre message s'ouvrira dans WhatsApp pour un envoi rapide."
                align="left"
                className="mb-8 !max-w-none"
              />

              <div className="sr-card">
                <div className="sr-form-progress">
                  <div
                    className="sr-form-progress__bar"
                    style={{ width: `${formProgress}%` }}
                  />
                </div>

                <div className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute h-0 w-0 opacity-0 pointer-events-none"
                      aria-hidden
                    />

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="sr-field">
                        <label htmlFor="name" className="sr-field__label">
                          Nom complet <span className="text-[var(--color-accent)]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="sr-input"
                          autoComplete="name"
                        />
                      </div>

                      <div className="sr-field">
                        <label htmlFor="email" className="sr-field__label">
                          Adresse email <span className="text-[var(--color-accent)]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="sr-input"
                          autoComplete="email"
                        />
                      </div>

                      <div className="sr-field">
                        <label htmlFor="phone" className="sr-field__label">
                          Téléphone <span className="text-[var(--color-accent)]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: formatPhoneInput(e.target.value),
                            }))
                          }
                          required
                          className="sr-input"
                          autoComplete="tel"
                          placeholder="+237 6XX XXX XXX"
                        />
                      </div>

                      <div className="sr-field">
                        <label htmlFor="subject" className="sr-field__label">
                          Service <span className="text-[var(--color-accent)]">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="sr-select"
                        >
                          <option value="" disabled>
                            Choisir un sujet
                          </option>
                          {CONTACT_SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="sr-field">
                      <label htmlFor="message" className="sr-field__label">
                        Votre message <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={500}
                        required
                        className="sr-textarea"
                        placeholder="Décrivez votre projet, vos délais et le type de bien…"
                      />
                      <p className="text-xs text-[var(--color-ink-muted)]">
                        {formData.message.length}/500 caractères
                      </p>
                    </div>

                    <div className="sr-field">
                      <span className="sr-field__label">Pièce jointe (optionnel)</span>
                      <label className="sr-file-drop">
                        <Upload className="h-5 w-5 shrink-0 text-[var(--color-blue)]" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-[var(--color-ink)]">
                            {fileName || 'Joindre un fichier'}
                          </p>
                          <p className="text-xs text-[var(--color-ink-muted)]">
                            PDF, DOC ou image — max. 10 Mo
                          </p>
                        </div>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            if (file.size > 10 * 1024 * 1024) {
                              setError('Le fichier est trop volumineux (max. 10 Mo).');
                              return;
                            }
                            setFileName(file.name);
                            setFormData((prev) => ({ ...prev, file }));
                          }}
                        />
                      </label>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-4">
                      <input
                        type="checkbox"
                        name="isUrgent"
                        checked={formData.isUrgent}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-[var(--color-ink)]">
                          Demande urgente
                        </span>
                        <span className="mt-0.5 block text-xs text-[var(--color-ink-muted)]">
                          Réponse prioritaire sous 24h
                        </span>
                      </span>
                    </label>

                    <div className="flex justify-center pt-2">
                      <TurnstileWidget />
                    </div>

                    {error ? (
                      <div className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={isSubmitting || !isTurnstileValid}
                      className="sr-btn sr-btn--primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        'Envoi en cours…'
                      ) : (
                        <>
                          <MessageCircle className="h-5 w-5" />
                          Envoyer sur WhatsApp
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-[var(--color-ink-muted)]">
                      En soumettant ce formulaire, vous acceptez notre{' '}
                      <a href={SITE.routes.privacy} className="sr-link !text-xs !normal-case">
                        politique de confidentialité
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Coordonnées */}
            <motion.aside
              className="space-y-5 lg:col-span-4"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="sr-panel-dark rounded-sm p-6 md:p-8">
                <h3 className="font-display mb-6 text-xl font-bold">Nos coordonnées</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div>
                      <p className="text-sm font-semibold text-white/90">Adresse</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">
                        {SITE.address.line1}
                        <br />
                        {SITE.address.line2}
                        <br />
                        <span className="text-white/60">{SITE.address.hint}</span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div>
                      <p className="text-sm font-semibold text-white/90">Email</p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="mt-1 block text-sm text-white/75 hover:text-white"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div>
                      <p className="text-sm font-semibold text-white/90">Téléphone</p>
                      <a
                        href={`tel:${SITE.phone}`}
                        className="mt-1 block text-sm text-white/75 hover:text-white"
                      >
                        {SITE.phoneDisplay}
                      </a>
                      <a
                        href={`tel:${SITE.phoneSecondary}`}
                        className="block text-sm text-white/75 hover:text-white"
                      >
                        {SITE.phoneSecondaryDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                    <div>
                      <p className="text-sm font-semibold text-white/90">Horaires</p>
                      <p className="mt-1 text-sm text-white/75">
                        Lun – Ven : 8h – 19h
                        <br />
                        Sam : 9h – 17h
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/50">
                    Suivez-nous
                  </p>
                  <SocialLinks variant="light" size={18} showWhatsapp />
                </div>
              </div>

              <div className="sr-card overflow-hidden">
                <div className="relative h-44 bg-[var(--color-surface-soft)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8102811448354!2d9.72972231573686!3d4.042097996991337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDIjMzEuNSJOIDnCsDQ0JzAwLjgiRQ!5e0!3m2!1sfr!2scm!4v1634567890123!5m2!1sfr!2scm"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                    title="Localisation Smart Rénov — Douala"
                  />
                </div>
                <div className="p-5">
                  <h3 className="sr-card__title text-base">Notre agence</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                    Venez nous rencontrer pour discuter de votre projet sur place.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rond+Point+CC+Douala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sr-link mt-4"
                  >
                    Voir sur la carte
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              <div className="sr-panel-accent rounded-sm p-6">
                <h3 className="font-display text-lg font-bold">Besoin d&apos;aide ?</h3>
                <p className="mt-2 text-sm text-white/90">
                  Notre équipe répond à vos questions par téléphone ou WhatsApp.
                </p>
                <a
                  href={`tel:${SITE.phone}`}
                  className="sr-btn mt-5 w-full border-2 border-[var(--color-night)] bg-white text-[var(--color-night)] hover:bg-white/90"
                >
                  <Phone className="h-4 w-4" />
                  Appeler maintenant
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="sr-section sr-section--cream">
        <div className="container mx-auto px-4">
          <SectionHeader
            kicker="FAQ"
            title={
              <>
                Questions <em>fréquentes</em>
              </>
            }
            description="Les réponses aux demandes les plus courantes."
          />

          <div className="sr-faq mx-auto mt-10 max-w-3xl space-y-3">
            {FAQ_ITEMS.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <ChevronDown className="sr-faq__chevron h-5 w-5 shrink-0 text-[var(--color-blue)]" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionBand />
      <Footer />

      {isSubmitted ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-night)]/80 p-4 backdrop-blur-sm"
          onClick={() => {
            setIsSubmitted(false);
            resetTurnstile();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="sr-card max-w-md w-full p-8 text-center shadow-[8px_8px_0_var(--color-night)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-[var(--color-accent)] text-white">
              <CheckCircle className="h-7 w-7" />
            </div>
            <h3 id="contact-success-title" className="sr-heading text-2xl">
              WhatsApp ouvert
            </h3>
            <p className="sr-lead mt-3 text-left !text-[var(--color-ink-muted)]">
              Votre message est prêt dans WhatsApp. Appuyez sur <strong>Envoyer</strong> pour nous le
              transmettre — nous vous répondrons rapidement.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="sr-btn sr-btn--primary flex-1"
              >
                Rouvrir WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  resetForm();
                }}
                className="sr-btn sr-btn--ghost flex-1"
              >
                Nouveau message
              </button>
            </div>
            <p className="mt-4 text-xs text-[var(--color-ink-muted)]">
              Fermeture automatique dans 10 secondes
            </p>
          </motion.div>
        </div>
      ) : null}
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--color-surface-soft)]" aria-label="Chargement…" />
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
