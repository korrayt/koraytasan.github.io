# MithyLeaks

Static, dependency-free literary archive website for `koraytasan.com/MithyLeaks/`.

## Files
- `index.html` — complete page and all three language versions.
- `styles.css` — responsive visual system.
- `script.js` — TR / EN / LAT tabs, archive drawer, reading progress.
- `medusa-tr.md`, `medusa-en.md`, `medusa-la.md` — source manuscripts.
- `build_site.py` — rebuilds `index.html` from the three manuscripts.

## Publish
Upload the contents of this folder to the web root behind `/MithyLeaks/`.
No build step is required for deployment. The Google Fonts references are optional; without them the site falls back to system serif fonts.

## Add the next file
The current package is intentionally built so `MYTH-001 / MEDUSA` works as the first archive record. For File 002, duplicate the dossier structure in `build_site.py` or split each record into its own HTML page while keeping `styles.css` and `script.js` shared.
