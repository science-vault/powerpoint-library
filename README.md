# PowerPoint Library

A separate searchable presentation library for Years 1–12, using the same visual style as the Textbook Library.

## Add resources

Put files in `resources/Primary/Subject/Year 01/Topic/` or `resources/Secondary/Subject/Year 12/Topic/`. Science folders for Years 1–12 are included; create any subject/topic folder you need. Folder names supply subject, year and topic unless a JSON descriptor overrides them.

PPTX, PPT and PDF files are indexed automatically. PPTX titles, creator and slide count are read from the file when available. A same-name PDF can be provided for a more reliable in-browser preview. Public PPT/PPTX originals use Microsoft’s external preview; if it cannot render, the original remains available.

A push rebuilds the catalogue and deploys the site using GitHub Actions. In **Settings → Pages**, choose **GitHub Actions** as the source. No sample lessons are counted as real resources.

## Link descriptors

Use the website’s **Add presentations → Prepare a resource link**, or save a JSON file such as `resources/Secondary/Physics/Year 12/Electromagnetism/induction.json`:

```json
{"title":"Electromagnetic induction","url":"https://YOUR-HOST/your-resource","subject":"Physics","years":[12],"topic":"Electromagnetism","author":"Your name","description":"Lesson description"}
```

Optional fields: `thumbnail` (HTTPS image), `previewUrl` (HTTPS PDF), `duration` (video), `slideCount` (presentation), `added` (ISO date), `subjectGroup`. Resource URLs must use HTTPS without credentials. Subject groups default to Science for Physics, Chemistry, Biology and Human Biology, and Humanities for History and Geography.

For a local file, place a same-name `.json` next to it with metadata but omit `url`. Links and files are deduplicated by source URL/file SHA256. Different editions can use distinct links.

## Large files

Keep large videos and presentations on an appropriate external host and index their HTTPS URLs. GitHub rejects files at its per-file limit; Git LFS alone is not a streaming service. A shared Drive file must be accessible to the intended viewers. Streaming, permissions and availability remain with the host.

## Features

Search; subject/year/topic filters; saved lessons and recent history on each device; original source links; PowerPoint/PDF preview; automatic catalogue generation. This static site has no public upload or admin-approval backend yet.

## Local checks

`python3 scripts/build_catalog.py`

`python3 -m unittest discover -s scripts -p 'test_*.py'`

Only share material you have permission to distribute. No licence is granted over uploaded teaching resources.
