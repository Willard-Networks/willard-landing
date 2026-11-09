# Willard Networks Landing Page

## Requirements

- Node.js 24 LTS (`.node-version`); minimum 24.11 for Vite+ 1.5.
- [Vite+ CLI](https://viteplus.dev/guide/), with project tooling pinned to 1.5.0.
- pnpm 10.32.1, selected by the `packageManager` field. Keep `pnpm-lock.yaml` as the canonical lockfile.

## Development

```sh
vp install --frozen-lockfile
vp dev
```

## Validation and production preview

```sh
vp check --no-fmt
vp test --run
vp pm audit
vp build
vp preview
```

`vp check` also checks formatting. Existing source-formatting differences are not part of the dependency refresh; CI runs lint and type checking with `--no-fmt` rather than reformatting the entire site.

Tests render the landing page with Vue, Vue Router and Vuetify and check its sections, FAQ markup, community links and Material Design icons. They do not replace interactive desktop/mobile browser testing.

## Dependency maintenance

Use `vp update` for updates within supported ranges. Keep Vue Router on 4.x and Vuetify on 3.x for this maintenance line; their next majors should be evaluated as separate migrations. Font Awesome packages were unused and have been removed; the site uses `@mdi/font`.

The explicit `esbuild` development dependency selects a patched optional peer supported by Vite+ (`^0.27.0 || ^0.28.0`), replacing the vulnerable 0.27 version retained in the old lockfile. Vite+ and its Vite core alias are pinned together in `pnpm-workspace.yaml`; use `vp migrate` when upgrading their configuration schema.
