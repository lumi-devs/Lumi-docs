# Lumi Docs

Official documentation and guides for **[Lumi](https://github.com/lumi-devs/Lumi)**, the modular, self-hosted Discord bot platform.

🌐 **Live Website:** [https://lumi-devs.github.io/Lumi-docs](https://lumi-devs.github.io/Lumi-docs)

---

## Overview

This repository powers the public documentation website built on [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/). All end-user guides, architecture specifications, API references, and self-hosting documentation live directly here.

- `content/getting-started/` — Prerequisites, quickstart, installation, and environment variables.
- `content/guides/` — In-depth guides for moderation, security, reaction roles, economy, and automod.
- `content/addons/` — SDK documentation for creating and running sandboxed custom addons.
- `content/deploy/` — Production deployment recipes for Docker Compose, systemd, and Kubernetes.
- `content/reference/` — Command catalogs, permission nodes, architecture overviews, and RPC actions.

---

## Local Development

### Prerequisites

- [Bun](https://bun.sh) (v1.2+)

### Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lumi-devs/Lumi-docs.git
   cd Lumi-docs
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the dev server:**
   ```bash
   bun run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) to view the documentation.

---

## Building & Verification

```bash
# Typecheck
bun run typecheck

# Lint check
bun run lint

# Static HTML production export
bun run build
```

---

## Automated Deployment

Commits merged into `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

---

## License

GNU Affero General Public License v3.0 (AGPL-3.0). See [LICENSE](LICENSE) for details.
