# Can Ventura

Web del restaurant familiar Can Ventura, a Llívia. Aquest fitxer recull les
pautes de treball del projecte; cal mantenir-lo breu i actualitzar-lo amb els
acords de la conversa. Les instruccions explícites de l'usuari prevalen.

## Comunicació i manera de treballar

- Comunica't en català i explica els canvis amb llenguatge clar.
- Treballa per peces petites que es puguin veure i comentar al navegador.
- Abans d'una fase, consulta `plans/README.md` i el pla corresponent.
- Respecta l'estat del pla: si està en revisió, treballa en la documentació i
  les decisions pendents fins que l'usuari indiqui que vol començar a implementar.
- Quan l'usuari encarregui una fase, completa-la dins de l'abast acordat sense
  tornar a demanar confirmació per decisions ja resoltes o ajustos rutinaris.
- Registra al pla les decisions, els canvis d'abast i la verificació feta.
  No marquis com a fet allò que només està proposat.
- Conserva l'històric segons la convenció de `plans/README.md`.

## Direcció de disseny

Ordre de prioritat establert per l'usuari:

1. Maquetes pròpies a `design/references/LANDING*.png`.
2. Referències de webs amb bon disseny i premis.
3. Web actual, `https://canventura.com`, com a font de continguts.

Mantén el fons negre, la tipografia gran, els detalls en monoespai, les
fotografies protagonistes i els gestos dibuixats de les maquetes. Reutilitza el
logo vectorial de `public/brand/can-ventura-logo.svg`.

Les fonts revisades estan a `design/references/sources.json`. Preserva els
originals; prepara derivats optimitzats a part quan implementis la web.
Confirma la vigència de menús, preus, horaris i dades de contacte abans de
publicar-los. Identifica els textos provisionals durant la revisió.

## Desenvolupament i verificació

- Stack existent: Astro, TypeScript, npm i adaptador de Cloudflare Workers.
- Mantén `package-lock.json` i usa `npm ci` per reproduir la instal·lació.
- Prioritza components Astro i CSS; afegeix JavaScript per a interaccions que
  el necessitin. Evita dependències que no aportin una necessitat concreta.
- Cuida el mòbil, el teclat, el contrast i `prefers-reduced-motion`.
- Comprova les peces visuals en escriptori i mòbil, amb captures quan ajudin.
- Executa `npm run build` després de canvis de codi. Comprova el desplegament
  amb `npx wrangler deploy --dry-run` quan canviï la configuració de Cloudflare.
- Per canvis de documentació, comprova el contingut i els enllaços locals;
  no cal tornar a compilar.
- Informa de les comprovacions fetes i de qualsevol limitació real.

Comandes habituals:

```sh
npm run dev                  # http://localhost:4321
npm run astro -- dev status
npm run astro -- dev stop
npm run build
npm run preview
npx wrangler deploy --dry-run
```

## Skills i Git

- Les skills del projecte viuen a `.agents/skills/<nom>/SKILL.md`.
- Crea-les quan hi hagi un flux repetible útil; les pautes generals van aquí.
- Llegeix les instruccions de la skill pertinent abans d'aplicar-la.
- Per editar instruccions d'agents o skills, aplica `agent-instruction-engineering`.
- Repositori remot: `https://github.com/mvrcPR/canventura-web.git`.
- Branca inicial: `main`. Fes commits amb un abast coherent quan l'usuari els
  encarregui i conserva els canvis de treball existents.
- Publica o desplega quan la petició de l'usuari ho autoritzi.
- Mantén secrets i fitxers generats fora de Git segons `.gitignore`.
