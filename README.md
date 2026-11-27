# lokeshpahal.com

Personal site — a single static page, built with [Astro](https://astro.build).

No framework runtime is shipped to the browser. The only client-side JavaScript
is a theme toggle, a scroll-reveal observer, and nav scroll-spy — all hand-written
and inlined.

## Editing content

**Everything on the page comes from [`src/data/profile.ts`](src/data/profile.ts).**
Bio, jobs, skills, projects, social links and stats all live there. You should not
need to touch a component to update the site's content.

Entries marked `TODO` in that file are scaffolding and still need real values.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
```

| Command           | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Dev server with hot reload                  |
| `npm run build`   | Production build into `dist/`               |
| `npm run preview` | Serve the built output locally              |
| `npm run check`   | Type-check `.astro` and `.ts` files         |

## Deployment

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

**One-time setup:** in the repository's *Settings → Pages*, set **Source** to
**GitHub Actions**. Without this the workflow builds but never publishes.

To serve the site from `lokeshpahal.com` rather than `lokeshpahal.github.io`,
add a `public/CNAME` file containing `lokeshpahal.com` and point the domain's DNS
at GitHub Pages.

## Layout

```
src/
  data/profile.ts     all site content
  data/apps.ts        content for the app pages (features, screenshots, …)
  pages/index.astro   the page; also emits Person JSON-LD
  pages/apps/*.astro  one page per app, e.g. /apps/spruce/ (SoftwareApplication JSON-LD)
  pages/404.astro
  layouts/Base.astro  <head>, fonts, theme bootstrap
  components/         Hero, About, Experience, Skills, Projects, Contact,
                      PageScripts (theme toggle, reveal, sticky header for every page)
  styles/global.css   design tokens, reset, shared primitives
public/               static files served as-is (app screenshots in public/apps/<app>/)
```

## Theming

Colours are CSS custom properties defined in `src/styles/global.css`. Dark is the
default; light is a separate, fully specified palette under `:root[data-theme='light']`
and is opt-in via the header toggle.
