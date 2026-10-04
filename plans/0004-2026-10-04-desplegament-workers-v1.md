# Desplegament de prova a Cloudflare Workers

| Camp | Valor |
| --- | --- |
| Identificador | 0004 |
| Versió | 1 |
| Creat | 2026-10-04 |
| Estat | En curs |
| Encàrrec actual | Aplicar i comitejar el patch `canventura-workers.patch` aportat per l'usuari |
| Objectiu del pla aportat | Configurar Workers Builds des de GitHub, publicar i verificar la URL de prova |

## Abast

- Repositori `mvrcPR/canventura-web`, branca de producció `main`.
- Compte Cloudflare **Can Ventura**: `f52cd73b7817945b167baacea418109f`.
- Worker `canventura-web`, publicat a `workers.dev` quan s'activi el desplegament.
- Pla gratuït; sense domini propi, serveis de pagament, D1 ni R2.
- El patch original partia de la pàgina de prova del setup. La web actual ja
  està implementada i revisada visualment; es conserva íntegrament.
- L'encàrrec actual aplica la configuració i crea un commit local. L'activació
  del build automàtic i la publicació no es fan durant aquesta aplicació.

## Configuració

Es conserva Astro amb renderitzat al servidor i l'adaptador de Cloudflare.
Wrangler fixa el compte de destí, habilita `workers.dev` i desactiva les URL
de previsualització. Les comandes i els valors de Workers Builds són al README.
Es desactiven les sessions d'Astro perquè el projecte no les utilitza i
l'adaptador provisionaria automàticament un KV `SESSION` si es deixessin actives.

## Antecedents aportats pel patch

El registre del patch indica que Cloudflare va retornar l'error `8000008` en
intentar crear la connexió del repositori perquè encara no tenia autoritzat
l'accés al GitHub de l'usuari. Cal autoritzar l'aplicació de Cloudflare per al
repositori abans de crear el build automàtic.

Segons aquest mateix registre, el connector de GitHub de ChatGPT tenia accés
de lectura, però les escriptures retornaven `403 Resource not accessible by
integration`, tant a l'API de trees com a la de contents. L'aplicació del patch
des del checkout local resol la necessitat de guardar aquests canvis sense
utilitzar aquella integració. Aquests errors són antecedents de l'altra sessió;
no s'han tornat a consultar els connectors durant aquest encàrrec.

El patch informa que la consulta inicial no trobava Workers, tokens de Workers
Builds ni subdomini. Es van crear el Worker `canventura-web` (ID
`bd15b8c9b02d425bb6527fd7fb025b59`) i el subdomini `canventura.workers.dev`.
La URL reservada era `https://canventura-web.canventura.workers.dev`, amb
`deployed_on` encara `null`. Aquest estat remot no s'ha verificat de nou aquí.

## Registre de verificació

| Comprovació | Resultat |
| --- | --- |
| Destí Cloudflare i repositori | Aportats pel patch; verificació remota pendent |
| Instal·lació reproduïble `npm ci` | Superada segons el registre aportat; el patch no modifica dependències |
| Aplicació al checkout actual | Contextos adaptats conservant la web i la configuració existents |
| Compilació `npm run build` | Superada en aquesta aplicació, amb sessions desactivades |
| Empaquetat `npx wrangler deploy --dry-run` | Superat: només `ASSETS`, sense KV, D1 ni R2; 637,06 KiB totals, 164,75 KiB gzip |
| Configuració generada de Wrangler | Compte correcte, `workers_dev: true`, `preview_urls: false`, sense altres bindings de dades |
| Portada i carta locals | HTTP 200 al port 4321 després del canvi de configuració |
| Connexió GitHub amb Cloudflare | Autorització pendent segons el registre aportat |
| Commit local del patch | Autoritzat per l'usuari |
| Primer desplegament i HTTP remot | Pendent |
| Publicació automàtica en push a `main` | Pendent |

## Registre de decisions

| Data | Decisió |
| --- | --- |
| 2026-10-04 | El registre aportat recull un encàrrec previ de configuració i primera publicació de prova |
| 2026-10-04 | El patch fixa el compte Can Ventura i desactiva sessions per evitar un KV innecessari |
| 2026-10-04 | El registre aportat indica que el Worker i el subdomini de prova estan creats; publicació pendent |
| 2026-10-04 | L'usuari encarrega aplicar i comitejar el patch des del checkout local |
| 2026-10-04 | Pla renumerat de 0002 a 0004 perquè el 0002 existent correspon a les skills; enllaços actualitzats |
| 2026-10-04 | Build, empaquetat en sec i HTTP local comprovats; sense desplegament ni push durant aquest encàrrec |
