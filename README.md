# Lumi Documentation

Official documentation for **[Lumi](https://github.com/lumi-devs/Lumi)** — a modular, self-hosted Discord bot built on Bun, TypeScript, `@sapphire/framework`, and discord.js v14.

🌐 **Live Site:** [https://lumi-devs.github.io/Lumi-docs](https://lumi-devs.github.io/Lumi-docs)

---

## 📖 Overview

This repository hosts the source code, content, and static assets for Lumi's documentation site, powered by [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/).

All end-user guides, developer reference sheets, API/RPC specs, and Add-on SDK manuals are maintained directly within this repository:

- `content/docs/` — Hand-written documentation articles in MDX format
- `content/docs/addons/` — Sandboxed Add-on SDK architecture, capabilities, and distribution guides
- `content/docs/deploy/` — Self-hosting manuals: Docker Compose, systemd, Kubernetes, and scaling tiers
- `content/docs/guides/` — In-depth domain guides for Moderation, Security, Reaction Roles, Economy, TempVC, etc.
- `content/docs/reference/` — Command references, environment variables, permits, and architecture topology
- `data/` — Static metadata snapshots (RPC definitions, permits, commands, and schemas)

---

## 🛠️ Local Development

### Prerequisites

- [Bun](https://bun.sh) (v1.2+)
- Node.js 22+ (optional, for Next.js fallback compatibility)

### Quickstart

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lumi-devs/Lumi-docs.git
   cd Lumi-docs
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the local development server:**
   ```bash
   bun run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the site.

4. **Production Build:**
   ```bash
   bun run build
   ```

---

## 🚀 Deployment & CI

Automated deployments are driven by GitHub Actions in `.github/workflows/deploy.yml`:

- **Push to `main`:** Automatically builds static artifacts (`output: "export"`) and deploys to **GitHub Pages**.
- **Scheduled Sync:** Nightly sanity builds ensure zero dead external references or stale contract typings.
- **Manual Trigger (`workflow_dispatch`):** Run on-demand for immediate documentation updates.

---

## 🤝 Contributing

Contributions to improve guides, fix typos, or add new integration workflows are warmly welcome!

1. Fork this repository.
2. Create a feature branch: `git checkout -b docs/my-guide`.
3. Commit your changes: `git commit -m "docs: add guide on XYZ"`.
4. Push to your branch and open a Pull Request.

---

## 📄 License

GPL-3.0-only © [Lumi Devs](https://github.com/lumi-devs). See [LICENSE](LICENSE) for details.
