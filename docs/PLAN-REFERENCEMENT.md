# Plan de référencement — Smart Rénov

**Site :** https://smartrenov237.com  
**Objectif :** apparaître sur Google quand quelqu’un cherche *« rénovation Douala »*, *« menuiserie aluminium Cameroun »*, *« Smart Rénov »*, etc.

Ce document liste **exactement ce que vous devez faire**, **où le faire** et **comment**.  
Le code du site est déjà prêt côté technique — il reste surtout des actions **chez Google, Bing et sur vos réseaux**.

---

## Lecture rapide (2 minutes)

| Priorité | Action | Où | Temps |
|----------|--------|-----|-------|
| 🔴 1 | Mettre le site en ligne (Node.js Hostinger) | hPanel Hostinger | 30–60 min |
| 🔴 2 | Créer la fiche **Google Business** (Douala) | business.google.com | 45 min |
| 🔴 3 | Inscrire le site sur **Google Search Console** | search.google.com/search-console | 20 min |
| 🟠 4 | Soumettre le sitemap + demander l’indexation | Search Console | 15 min |
| 🟠 5 | Aligner nom / adresse / téléphone partout | Google, Facebook, LinkedIn… | 30 min |
| 🟡 6 | Ajouter photos de chantiers + avis clients | Site + Google Business | Continu |
| 🟢 7 | Inscrire sur Bing Webmaster (optionnel) | bing.com/webmasters | 10 min |

> **Le plus important pour Douala :** la fiche **Google Business** + des **avis clients réels** + des **photos de réalisations**. Sans ça, le SEO technique seul ne suffit pas.

---

## Ce qui est DÉJÀ fait (vous n’avez rien à coder)

Le développeur / le site gère déjà :

- Titres et descriptions SEO sur chaque page
- Sitemap : `https://smartrenov237.com/sitemap.xml`
- Robots : `https://smartrenov237.com/robots.txt`
- Données structurées (entreprise locale à Douala)
- Redirections vers `smartrenov237.com`
- Mots-clés locaux (Douala, Cameroun, rénovation…)

**Votre rôle :** déployer le site, configurer Google/Bing, et alimenter le contenu.

---

## PHASE 1 — Mettre le site en ligne sur Hostinger

### Où ?
**hPanel Hostinger** → https://hpanel.hostinger.com

### Comment ?

#### Étape 1.1 — Choisir le bon type d’hébergement
- ✅ **Application Node.js** (ou « Déployer depuis GitHub »)
- ❌ **Pas** le déploiement Git classique vers `public_html` (ça donne une erreur 403)

#### Étape 1.2 — Connecter le bon dépôt GitHub
| Champ | Valeur |
|-------|--------|
| Dépôt | `DavidDef04/smart-renove-website` |
| Branche | `master` |
| Install | `npm install` |
| Build | `npm run build` |
| Start | `npm run start` |
| Node.js | **20** |

#### Étape 1.3 — Importer les variables d’environnement
1. hPanel → votre application Node.js → **Variables d’environnement**
2. Importez le fichier **`.env`** à la racine du projet (ou copiez-collez chaque ligne)
3. Vérifiez surtout :
   ```
   NEXT_PUBLIC_SITE_URL=https://smartrenov237.com
   ```
4. **Redéployez** après chaque modification

#### Étape 1.4 — Lier le domaine
1. hPanel → **Domaines** → associez `smartrenov237.com` à l’app Node.js
2. Activez le **certificat SSL** (HTTPS)
3. Attendez la propagation DNS (quelques minutes à 48 h)

#### Étape 1.5 — Vérifier que tout fonctionne
Ouvrez dans le navigateur :

| URL à tester | Résultat attendu |
|--------------|------------------|
| https://smartrenov237.com | Page d’accueil s’affiche |
| https://smartrenov237.com/sitemap.xml | Liste d’URLs du site |
| https://smartrenov237.com/robots.txt | Fichier texte avec `Sitemap: https://smartrenov237.com/sitemap.xml` |
| https://smartrenov237.com/contact | Formulaire + CAPTCHA fonctionnent |

---

## PHASE 2 — Google Search Console (indispensable)

### Où ?
https://search.google.com/search-console

### Pourquoi ?
Pour dire à Google que le site existe, envoyer le sitemap, et suivre l’indexation.

### Comment ?

#### Étape 2.1 — Créer la propriété
1. Connectez-vous avec un compte Google (idéalement `contact@smartrenov237.com`)
2. Cliquez **Ajouter une propriété**
3. Choisissez **Préfixe d’URL**
4. Entrez : `https://smartrenov237.com`

#### Étape 2.2 — Vérifier que vous êtes propriétaire du site

**Méthode recommandée — balise HTML (déjà prévue dans le code) :**

1. Google affiche un code du type : `google-site-verification=AbCdEf123456789`
2. Copiez **uniquement la partie après le `=`** (ex. `AbCdEf123456789`)
3. Allez sur **Hostinger** → Variables d’environnement
4. Ajoutez ou modifiez :
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=AbCdEf123456789
   ```
5. **Redéployez** le site
6. Attendez 5–10 minutes
7. Dans Search Console, cliquez **Vérifier**

**Alternative — DNS :** ajoutez un enregistrement TXT chez Hostinger (domaines) sans redéployer le site.

#### Étape 2.3 — Soumettre le sitemap
1. Menu gauche → **Sitemaps**
2. Dans le champ, tapez : `sitemap.xml`
3. Cliquez **Envoyer**
4. Statut attendu : **Réussite** (peut prendre quelques heures)

#### Étape 2.4 — Demander l’indexation des pages importantes
1. Menu → **Inspection de l’URL**
2. Collez une URL, puis **Demander une indexation**

| Priorité | URL |
|----------|-----|
| Haute | https://smartrenov237.com/ |
| Haute | https://smartrenov237.com/renovation-complete |
| Haute | https://smartrenov237.com/contact |
| Haute | https://smartrenov237.com/services |
| Moyenne | https://smartrenov237.com/realisations |
| Moyenne | https://smartrenov237.com/about |

Limite : environ 10–20 demandes par jour.

#### Étape 2.5 — Contrôler (après 1 à 2 semaines)
Dans Search Console, consultez :
- **Pages** → combien de pages sont indexées
- **Performances** → requêtes tapées, clics, position

---

## PHASE 3 — Google Business Profile (LA PLUS IMPORTANTE)

### Où ?
https://business.google.com

### Pourquoi ?
C’est ce qui fait apparaître l’entreprise sur **Google Maps** et pour les recherches *« rénovation près de moi »* à Douala.

### Comment ?

#### Étape 3.1 — Créer ou revendiquer la fiche
1. Allez sur https://business.google.com
2. Créez une fiche **Smart Rénov** ou revendiquez celle existante

#### Étape 3.2 — Renseigner EXACTEMENT ces informations

Copiez-collez tel quel (même orthographe partout) :

```
Nom          : Smart Rénov
Adresse      : Rond Point CC, Douala, Cameroun
Indication   : Entre Ndogkoti et le Commissariat 8ème
Téléphone    : +237 6 87 18 59 53
Téléphone 2  : +237 694 522 355
E-mail       : contact@smartrenov237.com
Site web     : https://smartrenov237.com
```

| Champ Google | Valeur suggérée |
|--------------|-----------------|
| Catégorie principale | Entreprise de rénovation |
| Catégories secondaires | Menuiserie, Entrepreneur en bâtiment |
| Zone desservie | Douala, Littoral, Cameroun |
| Horaires | Lun–Ven 8h–19h, Sam 9h–17h (ajustez si différent) |

#### Étape 3.3 — Vérifier la fiche
Google vous enverra une **carte postale**, un **appel** ou un **e-mail** pour confirmer que vous êtes bien l’entreprise. Suivez la procédure jusqu’au statut **Vérifié**.

#### Étape 3.4 — Enrichir la fiche (dès que vérifiée)
1. **Logo** : même que sur le site
2. **Photos** : minimum 10–20 photos de chantiers (avant/après)
3. **Description** (750 caractères max) — inclure :
   - Rénovation clé en main à Douala
   - Services : électricité, plomberie, carrelage, peinture, menuiserie aluminium
   - Appel à l’action : devis gratuit, WhatsApp
4. **Services** : listez chaque prestation
5. **Liens** : Facebook, LinkedIn, TikTok, YouTube (URLs du site)

#### Étape 3.5 — Publier régulièrement
1 à 2 fois par mois : photo de chantier + courte phrase + lien vers `/realisations` ou `/contact`.

---

## PHASE 4 — Bing Webmaster Tools (optionnel, 10 min)

### Où ?
https://www.bing.com/webmasters

### Pourquoi ?
Bing alimente aussi **Microsoft Edge** et une partie de **Brave**.

### Comment ?
1. Créez un compte
2. Ajoutez `https://smartrenov237.com`
3. **Astuce :** importez depuis Google Search Console (plus rapide)
4. Soumettez le sitemap : `https://smartrenov237.com/sitemap.xml`
5. (Optionnel) Ajoutez sur Hostinger :
   ```
   NEXT_PUBLIC_BING_SITE_VERIFICATION=votre_code_bing
   ```
   puis redéployez

---

## PHASE 5 — Cohérence partout (NAP)

### Quoi ?
**NAP** = **N**om, **A**dresse, **P**hone (téléphone).

Google compare les infos du site, de Google Business et des réseaux sociaux. Elles doivent être **identiques**.

### Où mettre à jour ?

| Plateforme | Lien | Quoi modifier |
|------------|------|---------------|
| Site web | smartrenov237.com | Déjà OK |
| Google Business | business.google.com | Nom, adresse, téléphone, site |
| Facebook | facebook.com | Page entreprise → À propos |
| LinkedIn | linkedin.com | Page entreprise |
| TikTok | tiktok.com/@smart_renov | Bio + lien site |
| YouTube | youtube.com/@smartrenov | Description + lien site |
| WhatsApp Business | Application WhatsApp | Profil entreprise |

### Règle d’or
Ne changez pas l’orthographe du nom, ne mélangez pas les numéros, n’utilisez pas un ancien domaine (`srs.cm`).

---

## PHASE 6 — Contenu & avis (continu)

### 6.1 — Photos de réalisations

**Où sur le site :** page https://smartrenov237.com/realisations

**Ce que vous devez préparer pour chaque chantier :**
- 5 à 15 photos avant/après
- Quartier, type de travaux, durée
- Renommer les fichiers avant envoi :
  - ✅ `renovation-maison-douala-akwa-2025.jpg`
  - ❌ `IMG_4523.jpg`

**Comment ajouter sur le site :** envoyez les photos + textes à votre développeur (fichier `app/data/realisationsData.ts`).

### 6.2 — Avis Google

**Où :** fiche Google Business

**Comment :**
1. Après chaque chantier terminé, envoyez le **lien d’avis Google** au client satisfait
2. Demandez un avis **authentique** (prénom + détail du projet)
3. Répondez à **tous** les avis sous 48 h
4. ❌ N’achetez jamais de faux avis

### 6.3 — Réseaux sociaux

Publiez 2 à 4 fois par mois :
- Photo ou vidéo de chantier
- Lien vers le site ou WhatsApp
- Mêmes coordonnées (NAP)

---

## PHASE 7 — Tests rapides (après mise en ligne)

Faites ces tests une fois le site en ligne :

| Test | Où | URL / action |
|------|-----|--------------|
| Sitemap OK | Navigateur | https://smartrenov237.com/sitemap.xml |
| Robots OK | Navigateur | https://smartrenov237.com/robots.txt |
| Données structurées | Google | https://search.google.com/test/rich-results → entrez l’URL d’accueil |
| Vitesse mobile | Google | https://pagespeed.web.dev/ → testez l’accueil |
| Partage WhatsApp/Facebook | Navigateur | Partagez l’URL d’accueil — titre + image doivent s’afficher |

---

## Checklist — à cocher dans l’ordre

### Semaine 1 (obligatoire)
- [ ] Site déployé en **Node.js** sur Hostinger (pas `public_html`)
- [ ] `.env` importé avec `NEXT_PUBLIC_SITE_URL=https://smartrenov237.com`
- [ ] HTTPS actif sur smartrenov237.com
- [ ] `/sitemap.xml` et `/robots.txt` accessibles
- [ ] Formulaire contact fonctionne
- [ ] Google Search Console : propriété créée et **vérifiée**
- [ ] Sitemap soumis dans Search Console
- [ ] Indexation demandée pour les 4 pages principales
- [ ] Google Business : fiche créée avec bon NAP

### Semaine 2–4
- [ ] Google Business : fiche **vérifiée** par Google
- [ ] 10+ photos ajoutées sur Google Business
- [ ] Facebook / LinkedIn / TikTok : lien site + même téléphone
- [ ] Premiers avis Google clients réels (objectif : 3–5)
- [ ] Au moins 3 réalisations avec photos sur le site

### Mois 2 et suivants (routine mensuelle, 30–60 min)
- [ ] Consulter Search Console (pages indexées, erreurs)
- [ ] Publier 1 nouvelle réalisation (site + Google)
- [ ] Demander 2–3 nouveaux avis clients
- [ ] Publier 2–4 posts sur les réseaux

---

## Délais réalistes

| Délai | Ce que vous pouvez attendre |
|-------|----------------------------|
| 1–2 semaines | Google découvre et commence à indexer les pages |
| 1–3 mois | Le site apparaît sur « Smart Rénov », « smartrenov237 » |
| 3–6 mois | Progression sur « rénovation Douala » si fiche Google + avis + contenu actifs |
| 6–12 mois | Positions plus stables (selon la concurrence locale) |

Le référencement **prend du temps**. La fiche Google + les avis + les photos accélèrent beaucoup les résultats locaux.

---

## Problèmes fréquents

| Problème | Cause probable | Solution |
|----------|----------------|----------|
| Erreur 403 sur le site | Déploiement Git vers `public_html` | Utiliser **Application Node.js** |
| Sitemap avec mauvaise URL | Variable manquante | `NEXT_PUBLIC_SITE_URL=https://smartrenov237.com` + redéployer |
| Google ne vérifie pas le site | Pas encore redéployé | Attendre 10 min après redéploiement, réessayer |
| Site invisible sur « rénovation Douala » | Fiche Google incomplète ou pas d’avis | Compléter Google Business + photos + avis |
| CAPTCHA contact en erreur | Clés Turnstile incorrectes | Vérifier les 2 clés dans `.env` sur Hostinger |

---

## Liens utiles (à garder sous la main)

| Outil | Lien |
|-------|------|
| Hostinger hPanel | https://hpanel.hostinger.com |
| Google Search Console | https://search.google.com/search-console |
| Google Business | https://business.google.com |
| Test SEO (rich results) | https://search.google.com/test/rich-results |
| Test vitesse | https://pagespeed.web.dev/ |
| Bing Webmaster | https://www.bing.com/webmasters |
| Cloudflare Turnstile | https://dash.cloudflare.com |

---

## Guide technique détaillé

Pour plus de détails (dépannage, métadonnées, fichiers du code), consultez aussi :

**[`docs/GUIDE-SEO-REFERENCEMENT.md`](./GUIDE-SEO-REFERENCEMENT.md)**

---

*Smart Rénov — smartrenov237.com — Document action utilisateur. Mettez à jour si les coordonnées ou l’hébergeur changent.*
