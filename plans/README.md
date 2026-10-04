# Plans de Can Ventura

Aquesta carpeta conserva els plans, les revisions i les decisions de la web.
La versió 2 del pla de la web està en implementació, autoritzada per l'usuari.

## Índex

| Pla | Versió | Estat | Objectiu |
| --- | --- | --- | --- |
| [0001 Proposta de web](0001-2026-10-04-proposta-web-v2.md) | 2 | En curs | Implementació de la web, carta automàtica i originals fotogràfics |
| [0001 Proposta inicial](0001-2026-10-04-proposta-web-v1.md) | 1 | Substituït | Històric de la proposta inicial |
| [0002 Skills reutilitzables](0002-2026-10-04-skills-v1.md) | 1 | Completat | Instal·lar i generalitzar cinc skills del repositori de referència |
| [0003 Capçalera i reserva](0003-2026-10-04-header-reserva-v1.md) | 1 | Completat | Header monoespai en majúscules, reserva a l'esquerra, desplegables i estats de scroll |
| [0004 Desplegament a Workers](0004-2026-10-04-desplegament-workers-v1.md) | 1 | En curs | Configuració aportada pel patch; activació de Workers Builds i publicació de prova pendents |

## Convenció

- Nom: `NNNN-AAAA-MM-DD-tema-vN.md`.
- Un pla inclou objectiu, estat, abast, fases, criteris de revisió, decisions
  pendents i registre de canvis.
- Estats: `En revisió`, `Preparat`, `En curs`, `Completat` i `Substituït`.
- Durant la revisió, ajustem el document i anotem els canvis rellevants al
  registre. Git conservarà els detalls de cada edició.
- Quan s'acordi una versió, registrem la data i què s'ha acordat. Aprovar la
  direcció general no implica que totes les fases s'hagin encarregat.
- Si canvia significativament una versió acordada, creem `v2`, `v3`, etc.
  Conservem l'anterior amb estat `Substituït` i un enllaç a la successora.
- Les fases es poden completar al mateix document, registrant la verificació.
- Per a una iniciativa diferent, creem el següent número de pla.
- Actualitzem aquest índex quan canviï la versió o l'estat.

Les pautes de treball compartides viuen a [AGENTS.md](../AGENTS.md), i les
skills reutilitzables a [.agents/skills](../.agents/skills/).
