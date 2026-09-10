<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Recording rule — Kolab legal and product content

This site publishes documents the Kolab app links to (terms, privacy notices,
prize-draw terms). The Kolab tracker lives in the `kolab-spec` repo, which you
may not be able to reach. **You do not need to.** You need to leave a trail that
the next triage can follow. Two things, every time you change anything under
`src/app/legal`, `src/app/privacy*`, `src/app/prize_draw*` or `public/legal`:

1. **A commit body** saying **who instructed the change, over what channel, from
   which source document, on what date**, and the Kolab issue id if you know
   one. "Update EU privacy notice" with no body cost five days of not knowing
   who approved a document naming a new legal entity.
2. **A row in `CHANGES.md`** (this repo), status `UNTRIAGED`. Whoever triages in
   `kolab-spec` reads it, files or updates the issue, and marks the row
   `TRIAGED KOL-nnn`. Do not mark it yourself.

Record-only. Do not wait for approval to make an urgent change the CFO asked
for; do record it. Never put a credential, a key, or a member's data in either
place.
