# Lumi-docs

The Next.js/fumadocs site that renders [Lumi](https://github.com/lumi-devs/Lumi)'s public
documentation at https://lumi-devs.github.io/Lumi-docs.

**Content lives in [lumi-devs/Lumi](https://github.com/lumi-devs/Lumi)'s `docs/site/`, not
here.** This repo is only the site tooling (Next config, fumadocs wiring, the components that
render the generated reference tables). If you want to fix a typo, add a guide, or update a
screenshot, open your PR against `docs/site/` in the main repo — PRs touching only this repo's
`content/`, `data/`, or `public/synced/` directories will be rejected, because those directories
are build inputs pulled from the main repo, not committed here (see `.gitignore`).

## How the build works

1. [`lumi-devs/Lumi`](https://github.com/lumi-devs/Lumi) is checked out into `./lumi`.
2. Its `scripts/docs/sync.sh` copies `docs/site/content` and `docs/site/public` into this
   repo's `content/` and `public/synced/`, and runs `bun run docs:export` to write the
   generated reference JSON (modules, commands, permits, RPC actions, env vars, data-privacy
   statements, addon SDK reference) into `data/`, plus `data/build-info.json` (the Lumi commit,
   its date and the latest `v*` release tag), which drives the "these docs track `main`" banner.
3. This repo's own `bun install` + `bun run build` (Next.js `output: "export"`) then produces
   the static site in `dist/`.

This mirrors [noctalia-dev](https://github.com/noctalia-dev)'s split between its main repo
(`docs/` + `tools/sync-docs.sh`) and its separate docs site repo.

## CI

`.github/workflows/deploy.yml` runs this pipeline and deploys to GitHub Pages on:

- push to `main` (this repo's own tooling changes),
- `repository_dispatch` with type `lumi-docs-sync`, sent by the main repo's
  `docs-sync.yml` whenever `docs/site/**`, `scripts/docs/**`, or the source the generators
  read from changes,
- a daily schedule, as a fallback for whenever the dispatch didn't fire (e.g. the main repo's
  `DOCS_DISPATCH_TOKEN` secret isn't set),
- `workflow_dispatch`, for a manual rebuild.

## Local development

```sh
../Lumi/scripts/docs/sync.sh .   # from a sibling checkout of lumi-devs/Lumi
bun install
BASE_PATH= bun run dev
```

## License

GPL-3.0-only, matching [lumi-devs/Lumi](https://github.com/lumi-devs/Lumi). See `LICENSE`.
