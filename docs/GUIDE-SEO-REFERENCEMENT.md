# Guide SEO & référencement — Smart Rénov (smartrenov237.com)

Ce document décrit **étape par étape** ce que vous devez faire **vous-même** (hors code) pour que le site soit bien indexé par Google, Bing, Brave, etc. et qu’il remonte sur les recherches locales du type *« rénovation Douala »*, *« menuiserie aluminium Cameroun »*.

> **Rappel important** : le site contient déjà une base technique solide (sitemap, robots, métadonnées, JSON-LD LocalBusiness). Ce guide complète le code par les actions **marketing, Google et contenu** indispensables pour apparaître en tête des résultats.

---

## Sommaire

1. [Avant la mise en ligne](#1-avant-la-mise-en-ligne)
2. [Déployer le site en production](#2-déployer-le-site-en-production)
3. [Vérifier que le SEO technique fonctionne](#3-vérifier-que-le-seo-technique-fonctionne)
4. [Google Search Console](#4-google-search-console)
5. [Google Business Profile (fiche locale)](#5-google-business-profile-fiche-locale)
6. [Bing Webmaster Tools](#6-bing-webmaster-tools)
7. [Cohérence NAP & réseaux sociaux](#7-cohérence-nap--réseaux-sociaux)
8. [Contenu : photos, vidéos, réalisations](#8-contenu--photos-vidéos-réalisations)
9. [Avis clients & confiance](#9-avis-clients--confiance)
10. [Performance & mobile](#10-performance--mobile)
11. [Suivi mensuel (routine)](#11-suivi-mensuel-routine)
12. [Checklist finale](#12-checklist-finale)
13. [Dépannage](#13-dépannage)

---

## 1. Avant la mise en ligne

### Étape 1.1 — Vérifier le nom de domaine

- Le site doit être accessible en **HTTPS** sur : `https://smartrenov237.com`
- Si le domaine pointe encore vers un ancien hébergeur, configurez les **DNS** (enregistrement A ou CNAME) chez votre registrar.

### Étape 1.2 — Préparer les variables d’environnement

Sur votre hébergeur (Vercel, OVH, etc.) ou dans `.env.local` en local, définissez :

| Variable | Obligatoire | Exemple / rôle |
|----------|-------------|----------------|
| `NEXT_PUBLIC_SITE_URL` | **Oui** | `https://smartrenov237.com` — URL canonique (sitemap, Open Graph, JSON-LD) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Oui (contact) | Clé publique Cloudflare Turnstile |
| `TURNSTILE_SECRET_KEY` | Oui (contact) | Clé secrète Turnstile |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Recommandé | Code fourni par Google Search Console (étape 4) |

Copiez le modèle depuis `.env.example` à la racine du projet.

### Étape 1.3 — Build de production

En local, dans le dossier du projet :

```bash
npm run build
npm run start
```

Si le build échoue, corrigez les erreurs avant de déployer.

### Étape 1.4 — Nettoyer le dossier `public/videos/` (recommandé)

Le dossier `public/videos/` contient d’anciens fichiers WordPress. Ils ne sont **pas utiles** au site actuel.

- **Option A** : supprimez ce dossier avant le déploiement.
- **Option B** : laissez-le — il est déjà **bloqué** dans `robots.txt` (`Disallow: /videos/`).

---

## 2. Déployer le site en production

### Étape 2.1 — Choisir un hébergeur

Exemples adaptés à Next.js :

- **Vercel** (simple, gratuit pour petits projets)
- **Netlify**
- **VPS** (OVH, DigitalOcean) avec Node.js

### Étape 2.2 — Connecter le dépôt Git

1. Poussez le code sur GitHub / GitLab.
2. Liez le dépôt à l’hébergeur.
3. Branche de production : `main` (ou `master`).

### Étape 2.3 — Configurer les variables sur l’hébergeur

Dans le panneau **Environment Variables** :

```
NEXT_PUBLIC_SITE_URL=https://smartrenov237.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

Redéployez après chaque modification de variables.

### Étape 2.4 — Lier le domaine `smartrenov237.com`

1. Ajoutez le domaine personnalisé dans l’hébergeur.
2. Configurez les DNS selon les instructions (souvent CNAME vers `cname.vercel-dns.com` ou enregistrement A).
3. Attendez la propagation DNS (quelques minutes à 48 h).
4. Activez le **certificat SSL** (HTTPS automatique sur Vercel/Netlify).

### Étape 2.5 — Tester le site en ligne

Ouvrez dans le navigateur :

- `https://smartrenov237.com`
- `https://smartrenov237.com/contact` (formulaire + CAPTCHA)
- `https://smartrenov237.com/services`

---

## 3. Vérifier que le SEO technique fonctionne

Faites ces vérifications **après** le déploiement.

### Étape 3.1 — Sitemap

1. Ouvrez : **https://smartrenov237.com/sitemap.xml**
2. Vous devez voir une liste d’URLs (`/`, `/about`, `/services`, etc.).
3. Si la page est vide ou en erreur 404 → vérifiez `NEXT_PUBLIC_SITE_URL` et redéployez.

### Étape 3.2 — Robots.txt

1. Ouvrez : **https://smartrenov237.com/robots.txt**
2. Vérifiez la ligne : `Sitemap: https://smartrenov237.com/sitemap.xml`
3. Vérifiez : `Disallow: /api/` et `Disallow: /videos/`

### Étape 3.3 — Manifest

1. Ouvrez : **https://smartrenov237.com/manifest.webmanifest**
2. Le nom **Smart Rénov** doit apparaître.

### Étape 3.4 — Métadonnées d’une page

1. Sur `https://smartrenov237.com/services/menuiserie-aluminium`, faites **clic droit → Afficher le code source**.
2. Cherchez :
   - `<title>` avec « Douala » ou « Smart Rénov »
   - `<meta name="description" ...>`
   - `<link rel="canonical" ...>`
   - `<meta property="og:title" ...>`

### Étape 3.5 — Données structurées (JSON-LD)

1. Allez sur : https://search.google.com/test/rich-results
2. Entrez l’URL : `https://smartrenov237.com`
3. Google doit détecter au minimum **LocalBusiness** ou **Organization** / **WebSite**.

### Étape 3.6 — Partage social (aperçu)

1. Allez sur : https://www.opengraph.xyz/ ou l’outil « Partager » de LinkedIn/Facebook.
2. Testez `https://smartrenov237.com` — titre, description et image doivent s’afficher.

---

## 4. Google Search Console

Objectif : dire à Google que le site existe, soumettre le sitemap et suivre l’indexation.

### Étape 4.1 — Créer un compte

1. Allez sur : https://search.google.com/search-console
2. Connectez-vous avec un compte Google professionnel (ex. `contact@smartrenov237.com` si vous utilisez Google Workspace).

### Étape 4.2 — Ajouter la propriété

1. Cliquez **Ajouter une propriété**.
2. Choisissez **Préfixe d’URL** : `https://smartrenov237.com`
3. Validez la propriété par une des méthodes :

#### Méthode A — Balise HTML (recommandée, déjà prévue dans le code)

1. Google affiche un code du type : `google-site-verification=AbCdEf123...`
2. Copiez **uniquement la valeur** après le `=`.
3. Ajoutez sur l’hébergeur :
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=AbCdEf123...
   ```
4. Redéployez le site.
5. Dans Search Console, cliquez **Vérifier**.

#### Méthode B — Enregistrement DNS

1. Ajoutez un enregistrement TXT chez votre registrar.
2. Pas besoin de redéployer le site.

### Étape 4.3 — Soumettre le sitemap

1. Menu gauche : **Sitemaps**
2. Dans « Ajouter un sitemap », entrez : `sitemap.xml`
3. Cliquez **Envoyer**
4. Statut attendu : **Réussite** (peut prendre quelques heures).

### Étape 4.4 — Demander l’indexation des pages clés

1. Menu : **Inspection de l’URL**
2. Collez chaque URL importante, puis **Demander une indexation** :

| Priorité | URL |
|----------|-----|
| Haute | `https://smartrenov237.com/` |
| Haute | `https://smartrenov237.com/renovation-complete` |
| Haute | `https://smartrenov237.com/contact` |
| Haute | `https://smartrenov237.com/services` |
| Moyenne | `https://smartrenov237.com/realisations` |
| Moyenne | `https://smartrenov237.com/services/menuiserie-aluminium` |
| Moyenne | `https://smartrenov237.com/about` |

Limite : environ 10–20 demandes par jour — ne spammez pas.

### Étape 4.5 — Surveiller les rapports (après 1–2 semaines)

Consultez régulièrement :

- **Pages** → pages indexées / non indexées
- **Expérience** → Core Web Vitals, mobile
- **Performances** → requêtes, clics, position moyenne (données limitées au début)

---

## 5. Google Business Profile (fiche locale)

C’est **l’action la plus importante** pour les recherches locales à Douala (*« rénovation près de moi »*, *« menuiserie Douala »*).

### Étape 5.1 — Créer ou revendiquer la fiche

1. Allez sur : https://business.google.com
2. Créez une fiche ou revendiquez celle existante pour **Smart Rénov**.

### Étape 5.2 — Renseigner les informations (identiques au site)

| Champ | Valeur à utiliser (cohérent avec le site) |
|-------|-------------------------------------------|
| Nom | Smart Rénov |
| Catégorie principale | Entreprise de rénovation / Entrepreneur en bâtiment |
| Catégories secondaires | Menuiserie, Construction, etc. |
| Adresse | Rond Point CC, Douala, Cameroun |
| Indication | Entre Ndogkoti et le Commissariat 8ème |
| Téléphone | +237 694 522 355 |
| Site web | https://smartrenov237.com |
| Horaires | Lun–Ven 8h–18h, Sam 8h–14h (ajuster si différent en réalité) |
| Zone desservie | Douala, Littoral, Cameroun |

### Étape 5.3 — Vérification Google

Google enverra une carte postale, un appel ou un e-mail pour vérifier l’entreprise. Suivez la procédure jusqu’au statut **Vérifié**.

### Étape 5.4 — Enrichir la fiche

1. **Logo** : même que favicon / logo du site.
2. **Photos** : chantiers, équipe, avant/après (minimum 10–20 photos de qualité).
3. **Description** (750 caractères max) — exemple de structure :
   - Qui vous êtes (rénovation clé en main à Douala)
   - Services (rénovation complète, menuiserie aluminium, électricité, carrelage…)
   - Appel à l’action (devis gratuit, WhatsApp)
4. **Services** : listez chaque prestation (rénovation maison, baies coulissantes, etc.).
5. **Liens** : WhatsApp, Facebook, LinkedIn, YouTube, TikTok (URLs du site `SITE_SOCIAL`).

### Étape 5.5 — Publier des actualités Google

1–2 fois par mois : photo de chantier + courte phrase + lien vers `https://smartrenov237.com/realisations` ou `/contact`.

---

## 6. Bing Webmaster Tools

Bing alimente aussi **Microsoft Edge** et une partie de **Brave**.

### Étape 6.1 — Inscription

1. https://www.bing.com/webmasters
2. Ajoutez le site `https://smartrenov237.com`
3. Import possible depuis **Google Search Console** (plus rapide).

### Étape 6.2 — Soumettre le sitemap

URL du sitemap : `https://smartrenov237.com/sitemap.xml`

---

## 7. Cohérence NAP & réseaux sociaux

**NAP** = Name, Address, Phone (nom, adresse, téléphone).

### Étape 7.1 — Règle d’or

Partout sur Internet, utilisez **exactement** les mêmes informations :

```
Smart Rénov
Rond Point CC, Douala, Cameroun
+237 694 522 355
contact@smartrenov237.com
https://smartrenov237.com
```

Pas de variantes du type « Smart Renov » sans accent, ou un autre numéro, sur Facebook si le site affiche un numéro différent.

### Étape 7.2 — Mettre à jour chaque profil

| Plateforme | Action |
|------------|--------|
| Facebook | Lien site = smartrenov237.com, adresse, téléphone, description |
| LinkedIn | URL entreprise + site |
| TikTok / YouTube | Lien bio vers smartrenov237.com |
| WhatsApp Business | Profil entreprise aligné |

### Étape 7.3 — Annuaires locaux (optionnel mais utile)

Inscrivez l’entreprise sur des annuaires camerounais / locaux (pages jaunes locales, annuaires BTP) avec le **même NAP**.

---

## 8. Contenu : photos, vidéos, réalisations

Le SEO technique ne remplace pas le **contenu réel**.

### Étape 8.1 — Préparer les médias

Pour chaque chantier :

- 5–15 **photos** avant/après (JPEG ou WebP, < 500 Ko si possible)
- 1 courte **vidéo** (30–60 s) pour réseaux + page réalisations
- Texte : quartier, type de bien, travaux réalisés, durée

### Étape 8.2 — Nommer les fichiers (SEO images)

Avant upload, renommez les fichiers :

```
renovation-maison-douala-akwa-2025-01.jpg
menuiserie-aluminium-facade-douala.jpg
```

Évitez : `IMG_4523.jpg`

### Étape 8.3 — Ajouter sur le site

1. Placez les images dans `public/images/realisations/` (ou structure équivalente).
2. Mettez à jour `app/data/realisationsData.ts` avec titre, description, alt text descriptif.
3. Redéployez.

**Exemple de bon texte alt** :  
`Rénovation complète salon — quartier Bonapriso, Douala — Smart Rénov`

### Étape 8.4 — Supprimer le dossier inutile

Supprimez `public/videos/` (ancien export WordPress) avant ou après déploiement.

### Étape 8.5 — Image Open Graph (partage Facebook/WhatsApp)

Créez une image **1200 × 630 px** avec logo + texte « Rénovation clé en main — Douala ».

- Enregistrez-la : `public/images/og-smart-renov.jpg`
- Demandez à votre développeur de l’utiliser dans `app/lib/seo.ts` (champ `DEFAULT_OG_IMAGE`) si ce n’est pas déjà fait.

---

## 9. Avis clients & confiance

### Étape 9.1 — Demander des avis Google

Après chaque chantier terminé :

1. Envoyez le lien d’avis Google Business au client satisfait.
2. Objectif : **avis authentiques** avec prénom et détail du projet.

Ne achetez pas de faux avis — risque de pénalité Google.

### Étape 9.2 — Répondre aux avis

Répondez à **tous** les avis (positifs et négatifs) sous 48 h, de façon professionnelle.

### Étape 9.3 — Témoignages sur le site

Quand vous avez de vrais témoignages, mettez à jour la section témoignages avec nom, quartier et type de projet.

---

## 10. Performance & mobile

Google favorise les sites **rapides** et **mobile-friendly**.

### Étape 10.1 — Test PageSpeed

1. https://pagespeed.web.dev/
2. Testez `https://smartrenov237.com` en mode **Mobile** et **Bureau**.
3. Notez les scores ; objectif : vert ou orange acceptable au début.

### Étape 10.2 — Actions simples

- Compresser les images (Squoosh, TinyPNG) avant upload.
- Éviter les vidéos lourdes en autoplay sur la page d’accueil.
- Tester le site sur un **vrai téléphone** (navigation, formulaire contact, WhatsApp).

### Étape 10.3 — Search Console — Expérience

Après 2 semaines, vérifiez **Expérience → Core Web Vitils** dans Search Console.

---

## 11. Suivi mensuel (routine)

Chaque mois, consacrez **30–60 minutes** :

| Tâche | Outil |
|-------|--------|
| Pages indexées / erreurs | Google Search Console |
| Requêtes et clics | Search Console → Performances |
| Nouveau contenu (1 réalisation) | Site + Google Business |
| 2–3 avis clients | Google Business |
| Publication réseaux sociaux | Facebook, LinkedIn, TikTok |
| Vérifier NAP inchangé | Fiche Google + site |

### Objectifs réalistes

| Délai | Résultat attendu |
|-------|------------------|
| 1–2 semaines | Pages découvertes et indexées |
| 1–3 mois | Apparition sur requêtes marque (« Smart Rénov ») |
| 3–6 mois | Progression sur requêtes locales si contenu + avis + fiche Google actifs |
| 6–12 mois | Positions stables sur mots-clés ciblés (selon concurrence à Douala) |

---

## 12. Checklist finale

Cochez au fur et à mesure :

### Technique
- [ ] Site en HTTPS sur `https://smartrenov237.com`
- [ ] `NEXT_PUBLIC_SITE_URL=https://smartrenov237.com` configuré
- [ ] Turnstile fonctionne sur `/contact`
- [ ] `https://smartrenov237.com/sitemap.xml` accessible
- [ ] `https://smartrenov237.com/robots.txt` accessible
- [ ] Test Rich Results OK sur la page d’accueil

### Google
- [ ] Search Console : propriété vérifiée
- [ ] Sitemap soumis
- [ ] Indexation demandée pour pages principales
- [ ] Google Business : fiche créée/vérifiée
- [ ] Google Business : photos + description + lien smartrenov237.com

### Contenu & confiance
- [ ] Au moins 3 réalisations avec photos et textes sur le site
- [ ] NAP identique partout (site, Google, réseaux)
- [ ] Premiers avis Google clients réels
- [ ] Dossier `public/videos/` supprimé ou ignoré

### Optionnel
- [ ] Bing Webmaster configuré
- [ ] Image Open Graph 1200×630
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` configuré

---

## 13. Dépannage

### Le sitemap affiche `localhost` ou une mauvaise URL

→ Vérifiez `NEXT_PUBLIC_SITE_URL` sur l’hébergeur et **redéployez**.

### Google ne vérifie pas la balise meta

→ Attendez 5–10 min après déploiement, videz le cache CDN, réessayez. Vérifiez le code source de la page d’accueil : `google-site-verification`.

### Pages « Découvertes – actuellement non indexées »

→ Normal au début. Soumettez l’URL manuellement, ajoutez des liens internes depuis l’accueil, attendez 1–2 semaines.

### Le site n’apparaît pas pour « rénovation Douala »

→ Vérifiez surtout : fiche Google Business complète, avis, contenu réalisations, backlinks locaux. Le SEO prend du **temps**.

### Formulaire contact : CAPTCHA échoue

→ Vérifiez `TURNSTILE_SECRET_KEY` et `NEXT_PUBLIC_TURNSTILE_SITE_KEY` en production.

---

## Ressources utiles

| Ressource | Lien |
|-----------|------|
| Google Search Console | https://search.google.com/search-console |
| Google Business | https://business.google.com |
| Test résultats enrichis | https://search.google.com/test/rich-results |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Bing Webmaster | https://www.bing.com/webmasters |
| Open Graph debugger | https://www.opengraph.xyz/ |

---

## Ce qui est déjà fait dans le code (référence)

Pour votre développeur ou pour mémoire :

| Fichier | Rôle |
|---------|------|
| `app/lib/seo.ts` | Métadonnées, sitemap routes, JSON-LD |
| `app/lib/site.ts` | URL, mots-clés, géo, horaires |
| `app/sitemap.ts` | Génération `/sitemap.xml` |
| `app/robots.ts` | Génération `/robots.txt` |
| `app/layout.tsx` | Métadonnées globales + JSON-LD |
| `app/manifest.ts` | PWA / manifest |
| Layouts `about`, `contact`, `formations`, `services`, etc. | SEO par section |

---

*Document créé pour Smart Rénov — smartrenov237.com. Mettez à jour ce guide si l’URL, l’hébergeur ou les coordonnées changent.*
