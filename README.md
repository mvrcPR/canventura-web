# Can Ventura

Web del restaurant Can Ventura a Llívia, amb Astro i Cloudflare Workers.
Disseny basat en les maquetes de `design/references/`.

## Projecte i històric

- [Pla d’implementació vigent](plans/0001-2026-10-04-proposta-web-v2.md).
- [Plans i històric](plans/README.md).
- [Pautes de treball](AGENTS.md).
- [Skills del projecte](.agents/README.md).

## Desenvolupament

Node.js 22.12 o superior i npm. Instal·lar amb `npm ci` i iniciar amb `npm run dev`.
La web queda disponible a http://localhost:4321, també des de la xarxa local.

```sh
npm run astro -- dev status
npm run astro -- dev stop
npm run build
npm run astro -- preview --host 127.0.0.1 --port 4322
npm run astro -- preview stop
npx wrangler deploy --dry-run
```

La portada està prerenderitzada en català (`/`), castellà (`/es/`), francès
(`/fr/`) i anglès (`/en/`). Les cartes corresponents es troben a `/carta/`,
`/es/carta/`, `/fr/carta/` i `/en/carta/`.

## Contingut i fotografies

- Textos, idiomes i contactes: `src/content/site.ts`.
- Selecció fotogràfica: `src/content/photos.ts`.
- Composició: `src/components/Home.astro`; estils: `src/styles/global.css`.
- Galeries accessibles amb botons, teclat i desplaçament tàctil natiu.
- Reserva externa al MyRestoo existent; no es manté una agenda pròpia.

Els 56 fitxers fotogràfics de `src/assets/photography/originals/` conserven els
bytes publicats, sense resize ni recompressió. El registre de procedència,
resolució i SHA-256 està a `design/assets/photography-sources.json`. Són les
versions completes exposades per la biblioteca pública de WordPress; no s’han
confirmat originals de càmera. La foto del cuiner fa 744 × 930 píxels.
Les 11 fotos utilitzades també es copien al build sense canviar-ne els bytes.

La base factual i les fonts tipogràfiques estan a
`design/assets/content-sources.json`. Les fonts se serveixen localment amb
les seves llicències. Textos i traduccions queden pendents de revisió familiar.

## Carta automàtica: integració pendent

L’usuari identifica MyRestoo com a propietari de la publicació automàtica.
Encara falta l’enllaç real d’aquesta publicació: la pàgina pública observada
només exposa imatges de WordPress i l’accés de reserva.

Provisionalment, `src/lib/menu.ts` recupera a cada petició la pàgina de menús
actual en l’idioma corresponent i selecciona les imatges completes de la carta.
No hi ha còpies locals de plats o preus ni un snapshot de carta al build.
S’utilitzen només URLs HTTPS d’imatges de la font observada; no s’injecta HTML
remot. Si la font falla o canvia de format, es conserva l’enllaç directe i el
contacte telefònic. Aquesta lectura no és una API de MyRestoo.

Cal substituir aquest adaptador per la font verificada abans de canviar el
domini de producció: llegir `canventura.com/els-nostres-menus/` ja no serà fiable
quan el domini serveixi la nova web. També falta acordar la migració de les
rutes antigues. No es publiquen horaris permanents sense confirmar-los.

## Cloudflare

El build i l’empaquetat en sec s’han comprovat. No s’ha publicat aquesta versió.
El servidor de preview utilitza el runtime local de Cloudflare.

Quan s’encarregui la publicació, un cop resolta la font de la carta i revisats
els continguts, les rutes antigues i els textos legals aplicables:

```sh
npx wrangler login
npm run deploy
```

### Desplegament automàtic des de GitHub

El destí és el compte **Can Ventura**, definit a `wrangler.jsonc`. La web de
prova es publica només a `workers.dev`; no s'hi configura cap domini propi.

A Cloudflare Workers Builds, connecta `mvrcPR/canventura-web` amb aquests
valors:

| Opció | Valor |
| --- | --- |
| Worker | `canventura-web` |
| Branca de producció | `main` |
| Directori arrel | `/` |
| Comanda de compilació | `npm ci && npm run build` |
| Comanda de desplegament | `npx wrangler deploy` |
| Variable de compilació | `NODE_VERSION=22.16.0` |
| Builds d'altres branques | Desactivats |

Cada push a `main` ha de compilar i publicar la web un cop activada la connexió.
Mantén Workers Free i Workers Builds Free. No cal configurar D1, R2 ni secrets
de GitHub Actions. Les sessions d'Astro estan desactivades perquè encara no
s'utilitzen; així l'adaptador no provisiona un KV per a sessions.
La connexió necessita autoritzar l'aplicació de Cloudflare a GitHub amb accés
a aquest repositori; el connector de GitHub de ChatGPT no substitueix aquesta
autorització.

Estat de l'activació i comprovacions:
[pla de desplegament](plans/0004-2026-10-04-desplegament-workers-v1.md).

Configuració a `wrangler.jsonc` i documentació de
[l’adaptador oficial](https://docs.astro.build/en/guides/integrations-guide/cloudflare/).
