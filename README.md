# cambrown.io

Personal site. Plain HTML/CSS in `public/`, served by a Cloudflare Worker with static assets.

- Edit `public/index.html`
- Preview: `python3 -m http.server -d public 8000`
- Deploy: `npx wrangler deploy` (custom domains cambrown.io and www.cambrown.io are set in `wrangler.jsonc`)
