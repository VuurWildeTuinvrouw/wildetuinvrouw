# De wilde tuinvrouw

GitHub- en Vercel-versie van de website van De wilde tuinvrouw.

Deze export correspondeert met de goedgekeurde reviewversie waarin de
merknaam volledig is aangepast en de verdikte, vuurkleurige hondsroos als
favicon wordt gebruikt.

## Mappenindeling

- `src/` — React-componenten en vormgeving
- `public/media/` — gebruikte fotografie, illustraties en video
- `public/fonts/` — plek voor gelicentieerde Canela-webfonts
- `docs/` — projectdocumentatie en het volledige feedbacklogboek
- `public/robots.txt` en `public/sitemap.xml` — zoekmachinebestanden
- `vercel.json` — zorgt dat onder meer `/privacy` via de React-app opent

`node_modules/` en `dist/` horen niet in GitHub en worden via `.gitignore` uitgesloten.

## Lokaal starten

```bash
npm install
npm run dev
```

## Productieversie controleren

```bash
npm run build
npm run preview
```

## Publiceren via GitHub en Vercel

1. Upload de inhoud van deze map naar de hoofdmap van de GitHub-repository.
2. Koppel die repository in Vercel.
3. Vercel herkent Vite automatisch. Gebruik zo nodig:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Controleer na publicatie `/`, `/privacy`, `/robots.txt` en `/sitemap.xml`.

Lees vóór publicatie ook `FONT-LICENTIE.md`.
