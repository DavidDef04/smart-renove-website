# Renomme les images WhatsApp juin 2026 + UUID vers des noms SEO propres
$dir = "D:\Mes_Projets\sites\smart-renov-website\public\images"

function Move-Img($from, $to) {
  $src = Join-Path $dir $from
  $dst = Join-Path $dir $to
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Host "SKIP (missing): $from"
    return
  }
  if ((Test-Path -LiteralPath $dst) -and ($src -ne $dst)) {
    Remove-Item -LiteralPath $dst -Force
  }
  Move-Item -LiteralPath $src -Destination $dst
  Write-Host "OK: $to"
}

# Ancien hero stock → archive
Move-Img "hero-01-renovation-boutique.jpg" "stock-pose-fenetre-pvc-perceuse.jpg"

# Hero slide 1 — rénovation complète avant/après
Move-Img "WhatsApp Image 2026-06-20 at 17.07.05.jpeg" "hero-01-renovation-complete-avant-apres.jpg"

# WhatsApp 2026-06-20
Move-Img "WhatsApp Image 2026-06-20 at 16.13.34.jpeg" "amenagement-bureau-cloison-vitree-aluminium-blanc-01.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.35.jpeg" "renovation-boutique-vitrine-marbre-led-nuit.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.35 (1).jpeg" "amenagement-bureau-cloisons-aluminium-stores-gris.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.35 (2).jpeg" "rendu-3d-maison-moderne-pergola-balcon.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.36.jpeg" "renovation-facade-immeuble-alucobond-gris-blanc-01.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.36 (1).jpeg" "renovation-facade-immeuble-panneaux-gris-vitrage-bleu-02.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.36 (2).jpeg" "chantier-immeuble-echafaudage-bambou-ouvriers.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.36 (3).jpeg" "facade-immeuble-bardage-blanc-gris-verre-bleu-01.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.36 (4).jpeg" "pose-joint-finition-cloison-bureau-01.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.37.jpeg" "artisan-joint-cloison-vitree-bureau-02.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.37 (1).jpeg" "installation-cloisons-vitrees-aluminium-chantier.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.37 (2).jpeg" "bureau-modulaire-entrepot-bleu-blanc.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.37 (3).jpeg" "equipe-montage-structure-aluminium-blanc-atelier.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.37 (4).jpeg" "renovation-boutique-koteka-etageres-tasseaux-lumineux.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.38.jpeg" "renovation-boutique-artisan-etagere-or-marbre.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.13.38 (1).jpeg" "amenagement-patio-baie-vitree-gazon-synthetique.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.38.jpeg" "stock-outils-electricien-renovation.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.38 (1).jpeg" "tableau-electrique-cablage-professionnel.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.38 (2).jpeg" "installation-plomberie-chantier-pvc-ppr.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.39.jpeg" "renovation-salle-de-bain-carrelage-gris-marbre-01.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.39 (1).jpeg" "renovation-salle-de-bain-douche-noire-marbre-02.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.39 (2).jpeg" "mitigeur-baignoire-chrome-carrelage-marbre.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.44.39 (3).jpeg" "installation-chauffe-eau-ariston-ppr-vert.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.12.jpeg" "pose-carrelage-sol-marbre-blanc-cales-nivellement.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.13.jpeg" "pose-carrelage-mural-blanc-bandes-noires-chantier.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.13 (1).jpeg" "pose-carrelage-sol-marbre-blanc-murs-bruts.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.14.jpeg" "renovation-cuisine-carrelage-marbre-plan-travail-granit.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.14 (1).jpeg" "pose-carrelage-sol-gris-anthracite-brillant.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.14 (2).jpeg" "installation-wc-moderne-chantier-plomberie.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.14 (3).jpeg" "stock-plomberie-wc-bidet-outils-fond-blanc.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.15.jpeg" "chantier-gros-oeuvre-plomberie-electricite-per.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.15 (1).jpeg" "stock-materiel-plomberie-ppr-vert-raccords.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.15 (2).jpeg" "installation-faux-plafond-ossature-echafaudage.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.54.15 (3).jpeg" "renovation-faux-plafond-cables-electriques.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.58.23.jpeg" "outils-peinture-bac-rouleau-masquage.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.58.24.jpeg" "stock-pots-peinture-couleurs-vives.jpg"
Move-Img "WhatsApp Image 2026-06-20 at 16.58.24 (1).jpeg" "peinture-interieure-mur-jaune-rouleau.jpg"

# WhatsApp 2026-06-13
Move-Img "WhatsApp Image 2026-06-13 at 18.29.08.jpeg" "pose-porte-vitree-pvc-blanche-imposte-arc.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.08 (1).jpeg" "plafond-suspendu-placo-caisson-decoration.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.09.jpeg" "stock-plaques-platre-hydrofuge-vert-palettes.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.09 (1).jpeg" "materiaux-placo-profils-metalliques-bande-joint.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.09 (2).jpeg" "collage-materiaux-platrerie-placo-enduits-vis.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.10.jpeg" "rideau-metallique-grille-mailles-magasin.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.10 (1).jpeg" "cloison-vitree-bureau-cadre-blanc-desk.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.10 (2).jpeg" "facade-vitrage-bleu-vertical-briques.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.10 (3).jpeg" "cloison-vitree-cadre-noir-bureau-chantier.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.11.jpeg" "baie-vitree-coulissante-alu-teintee-balcon-01.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.11 (1).jpeg" "garde-corps-verre-terrasse-toit-moderne.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.11 (2).jpeg" "renovation-salle-de-bain-douche-verre-violet-01.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.12.jpeg" "facade-immeuble-mur-rideau-verre-bleu.jpg"
Move-Img "WhatsApp Image 2026-06-13 at 18.29.12 (1).jpeg" "renovation-salle-de-bain-douche-metro-baignoire-02.jpg"

# UUID
Move-Img "0429e1f1-7a57-414e-b800-820b62f76114.jpg" "cloison-vitree-cadre-noir-bureau-chantier-02.jpg"
Move-Img "01abbc06-9858-4064-9bc5-5b94c9a53a29.jpg" "cloison-modulaire-aluminium-vitree-atelier.jpg"
Move-Img "0fa3da34-f3c7-4295-bd3f-de9251bd2e8c.jpg" "baie-vitree-coulissante-alu-noir-balcon-02.jpg"
Move-Img "15bff000-621c-46e2-8dbf-45977f066bd0.jpg" "cabine-bureau-aluminium-entrepot-angle.jpg"
Move-Img "15bff000-621c-46e2-8dbf-45977f066bd0 (1).jpg" "cabine-bureau-aluminium-entrepot-face.jpg"
Move-Img "365099b9-a407-4463-ae94-65e5521e9195.jpg" "fenetre-coulissante-alu-anthracite-moustiquaire.jpg"
Move-Img "43b22d89-7635-480c-b899-67bd6703971b.jpg" "equipe-smart-renov-pose-profile-menuiserie-01.jpg"
Move-Img "6ba2ea9f-a657-4e37-94e9-c24744d2722c.jpg" "ouvrier-scie-onglet-profile-aluminium-01.jpg"
Move-Img "6c71cbaf-588b-4bda-b5f6-8e2af66e1378.jpg" "equipe-chef-chantier-bureau-planification.jpg"
Move-Img "7479ccb1-4a8a-45d6-9fca-8e8b139aafb7.jpg" "coffret-aluminium-persiennes-atelier-ouvert.jpg"
Move-Img "90c32ed3-8bae-4688-b36c-afb9dc61b513.jpg" "pattes-fixation-metal-montage-structure.jpg"
Move-Img "a084d825-8ba3-434e-8365-73f2043c26c1.jpg" "ouvrier-scie-onglet-profile-aluminium-02.jpg"
Move-Img "b1aa30a2-e759-4cce-ae61-0ee4da0b241c.jpg" "ouvrier-scie-onglet-profile-phalucam.jpg"
Move-Img "b2852432-dee8-49ef-a999-d159c5fd3d55.jpg" "equipe-pose-profile-menuiserie-sol-carrele-02.jpg"
Move-Img "c1e936db-b196-4003-bb4b-7a8dda7dceba.jpg" "volet-persienne-aluminium-effet-bois-marron.jpg"
Move-Img "c69d4d88-8df0-49b4-b82b-9a2ac3c19f85.jpg" "pose-porte-vitree-pvc-blanche-ferme-porte.jpg"
Move-Img "d2e86a72-ac00-4316-aded-0ef07259037f.jpg" "cloisons-bureau-aluminium-verre-bande-bleue.jpg"
Move-Img "d8f98543-8810-476c-8149-b7707867c2bf.jpg" "pose-garde-corps-balcon-aluminium-panneau-bleu.jpg"
Move-Img "e227f630-099a-4071-a70d-d330911de3b8.jpg" "equipe-pose-profile-menuiserie-sol-carrele-03.jpg"
Move-Img "e228f5ba-4902-4db2-9fe5-f3671b2c6e12.jpg" "livraison-fenetres-aluminium-camion.jpg"
Move-Img "ecc80013-1c21-484e-8c7a-e90a158c03c7.jpg" "fenetre-coulissante-alu-blanc-vitrage-bleu.jpg"
Move-Img "ec0fa1f4-0a9f-433f-8675-259e9029d7b9.jpg" "montage-structure-aluminium-bureau-atelier.jpg"

Write-Host "Done."
