# Canventura

Proyecto Astro con una página «¡Hola mundo!» y renderizado en Cloudflare Workers.

## Documentació del projecte

- [Plans i històric](plans/README.md).
- [Pautes de treball](AGENTS.md).
- [Skills del projecte](.agents/README.md).

## Desarrollo local

Requiere Node.js 22.12 o superior y npm.

```sh
npm install
npm run dev
```

Abre http://localhost:4321. El servidor escucha en todas las interfaces para
poder acceder desde la red local usando la IP del equipo y el puerto 4321.

La página principal está en `src/pages/index.astro`.

Para detener el servidor:

```sh
npm run astro -- dev stop
```

## Compilar y previsualizar

```sh
npm run build
npm run preview
```

La previsualización utiliza el runtime local de Cloudflare y el puerto 4321.
Detén primero el servidor de desarrollo si está usando ese puerto.

## Desplegar en Cloudflare Workers

```sh
npx wrangler login
npm run deploy
```

El comando compila Astro y despliega el Worker `canventura-web`. Wrangler
muestra la URL pública al terminar. Puedes cambiar el nombre en
`wrangler.jsonc`.

Para Workers Builds, usa `npm run build` como comando de compilación y
`npx wrangler deploy` como comando de despliegue.

El adaptador de Astro genera la configuración de despliegue y los assets.
Consulta la [documentación oficial del adaptador](https://docs.astro.build/en/guides/integrations-guide/cloudflare/).

## Verificación

Dependencias instaladas y compilación completada con `npm run build`.
El servidor de desarrollo devuelve HTTP 200 en http://localhost:4321 y muestra
«¡Hola mundo!».
El empaquetado de Cloudflare también se ha verificado con
`npx wrangler deploy --dry-run`, sin publicar el proyecto.
