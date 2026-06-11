# Renomme les images uploadées vers des noms propres (Smart Rénov)
$dir = "d:\Mes_Projets\sites\smart-renov-website\public\images"

function Move-Img($from, $to) {
  $src = Join-Path $dir $from
  $dst = Join-Path $dir $to
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Host "SKIP (missing): $from"
    return
  }
  if (Test-Path -LiteralPath $dst) { Remove-Item -LiteralPath $dst -Force }
  Move-Item -LiteralPath $src -Destination $dst
  Write-Host "OK: $to"
}

# Hero
Move-Img "aboutimage1.jpg" "hero-01-renovation-boutique.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.25.jpeg" "hero-02-facade-commerce.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.46.29.jpeg" "hero-03-renovation-salon.jpg"

# About / équipe
Move-Img "WhatsApp Image 2026-05-07 at 17.34.24.jpeg" "about-01-equipe-boutique.jpg"
Move-Img "aboutimage2.jpg" "about-02-menuiserie-atelier.jpg"
Move-Img "aboutimage3.jpg" "about-03-equipe-groupe.jpg"
Move-Img "d1e03762-b1b6-4ace-ad4a-cc1b1febd6c1.jpg" "about-04-bureau-equipe.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.28.jpeg" "about-05-equipe-chantier.jpg"

# Services + réalisation carrelage (même photo source)
Move-Img "renovationcomplete.jpg" "service-renovation-complete.jpg"
Copy-Item (Join-Path $dir "service-renovation-complete.jpg") (Join-Path $dir "realisation-renovation-carrelage.jpg") -Force -ErrorAction SilentlyContinue

Move-Img "menuiserie.jpg" "service-menuiserie.jpg"

# Réalisations
Move-Img "ddb031d4-f7bc-43d9-988a-065e208e1681.jpg" "realisation-menuiserie-mesure.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.45.54.jpeg" "realisation-menuiserie-porte-verre.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.46.57.jpeg" "realisation-menuiserie-fenetre-bronze.jpg"
Move-Img "22b32bc3-d49d-41fa-883c-6d35287ee84b.jpg" "realisation-menuiserie-facade-baies.jpg"
Move-Img "8288cf57-8fe7-4e61-80fc-2081a528b73e.jpg" "realisation-menuiserie-puits-lumiere.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.31.jpeg" "realisation-renovation-plafond-led.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.46.28.jpeg" "realisation-renovation-lambris.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.46.30.jpeg" "realisation-renovation-mur-design.jpg"
Move-Img "221125ff-1a29-4903-88f1-77c6cfda76c8.jpg" "realisation-renovation-salle-bain.jpg"
Move-Img "17da6bd9-efa7-48a7-b6a4-bbb62f10fc6c.jpg" "realisation-facade-smart-renov.jpg"
Move-Img "93f64c1a-7a3b-4c58-82c3-c72dffa20d1f.jpg" "realisation-renovation-balcon.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.34.jpeg" "realisation-renovation-peinture.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.26.jpeg" "realisation-renovation-boutique.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.46.20 (1).jpeg" "realisation-renovation-plafond.jpg"
Move-Img "7926a85b-d070-48b1-9d3f-bee2c2644520.jpg" "realisation-menuiserie-volets.jpg"
Move-Img "7904b804-9235-46d7-8500-425176f292c6.jpg" "realisation-menuiserie-cloisons.jpg"
Move-Img "64eab92e-a8de-41a2-bc06-fc0acdbac125.jpg" "realisation-menuiserie-rideau.jpg"
Move-Img "0cf6c509-8816-4c11-8ee4-5cd04a4866f4.jpg" "realisation-facade-immeuble.jpg"

# Formations
Move-Img "1286234a-2ec0-4e97-9599-8a7b9b9cc034.jpg" "formation-niveau-laser.jpg"
Move-Img "WhatsApp Image 2026-05-07 at 17.34.35.jpeg" "formation-supervision-plafond.jpg"
Move-Img "97f00525-adca-4132-8980-9ff4099b83d9.jpg" "formation-equipe-chantier.jpg"
Copy-Item (Join-Path $dir "about-02-menuiserie-atelier.jpg") (Join-Path $dir "formation-menuiserie-atelier.jpg") -Force -ErrorAction SilentlyContinue

# Alias SEO / legacy
Copy-Item (Join-Path $dir "service-renovation-complete.jpg") (Join-Path $dir "renovation.jpg") -Force -ErrorAction SilentlyContinue

Write-Host "Done."
