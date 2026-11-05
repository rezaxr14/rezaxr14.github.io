# rezaxr14.github.io

Personal portfolio, served by GitHub Pages from the root of `main`.

| Path | What it is |
| --- | --- |
| `source/` | React source (developerFolio-based). All content lives in `source/src/portfolio.js`. |
| repo root (`index.html`, `static/`, icons) | Production build output served by Pages. Do not edit by hand. |
| `legacy/` | Previous version of the site, kept for reference. |

## Editing and publishing

```bash
cd source
npm ci
npm start            # local dev server
npm run build        # production build into source/build

# publish: replace the served files at the repo root with the new build
rm -rf ../static
cp -r build/. ..
cd .. && git add -A && git commit -m "Rebuild site" && git push
```

Project card images live in `source/src/assets/projects/` (16:9, 1200×675 WebP).
