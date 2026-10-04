# Proposta de capçalera i reserva

| Camp | Valor |
| --- | --- |
| Identificador | 0003 |
| Versió | 1 |
| Creat | 2026-10-04 |
| Estat | Completat |
| Encàrrec | Buscar referències i proposar millores al header i al botó de reserva |
| Acord | Proposta acceptada; implementar l'opció A i els estats de scroll |

## Problema observat

L'usuari considera que la capçalera queda poc integrada i vol revisar el botó
de reserva. En la primera implementació, el rectangle fosc del menú apareix
com una peça superposada a la foto. Els quatre idiomes ocupen massa protagonisme
a l'esquerra. La reserva té un requadre gris amb un cercle sense un significat
clar i la versió flotant repeteix aquest element durant el recorregut.

Les maquetes pròpies continuen marcant la composició: negre, nom gran,
fotografia a la dreta, logo petit, detalls monoespai i reserva centrada a baix.

## Referències revisades

| Referència | Evidència | Idea que adaptem |
| --- | --- | --- |
| [Mugaritz](https://www.mugaritz.com/) | [Awwwards Honorable Mention](https://www.awwwards.com/sites/mugaritz), 2025-04-08; portada actual consultada en navegador | Accés directe a reservar, amb text clar i jerarquia pròpia; selector d'idioma agrupat |
| [BAVET](https://bavet.eu/) | [Awwwards Site of the Day](https://www.awwwards.com/sites/bavet), 2023-07-04; premi verificat a la fitxa i portada actual consultada en navegador | Navegació ordenada al voltant de la marca; reserva fàcil de localitzar |
| [Da Pietro 1955](https://dapietro1955.it/) | [Awwwards Honorable Mention](https://www.awwwards.com/sites/da-pietro-1955), 2025-05-27, verificat a la fitxa | Referència addicional de restauració; no dirigeix aquesta proposta perquè la captura inicial mostrava la introducció i l'avís de cookies |

Els premis corresponen a les versions presentades en aquelles dates. L'anàlisi
d'interfície es basa en les webs disponibles avui. Prenem decisions pròpies
per a Can Ventura; no traslladem les seves paletes o les seves animacions.

## Capçalera proposada

- Logo a l'esquerra, navegació centrada i idioma/reserva a la dreta.
- Menú de tres enllaços: «La casa», «Carta i menús», «Contacte».
- Selector compacte «CA ⌄», desplegable amb els quatre idiomes disponibles.
- «Reservar ↗» com a accés secundari en el header d'escriptori.
- Text blanc sobre la portada, amb un degradat negre ample que protegeix
  tota la franja superior de la fotografia. Eliminem el requadre del menú.
- Al mòbil: logo, «CA ⌄» i «Menú +». La reserva principal queda a la portada;
  també és accessible des del menú desplegat.

En una implementació posterior, el header es mantindria accessible en scroll,
amb fons negre sòlid i una línia molt fina. En escriptori, «Reservar ↗» al header
substituiria el botó flotant central. Al mòbil, quan la reserva de portada surti
de pantalla, apareixeria una acció compacta al peu respectant l'àrea segura.
Aquests estats en scroll són propostes; la maqueta només mostra la portada.

## Reserva: dues variants per comparar

**A, recomanada.** «Reservar taula ↗» amb tipografia de 28 px en escriptori
i 24 px en mòbil, sense caixa, amb una línia fina inferior. Conserva la posició
centrada baixa de la maqueta original i dona més pes a l'acció. La fletxa pot
desplaçar-se 3 px en hover, respectant la preferència de reduir el moviment.

**B, alternativa.** Mateix text amb fons blanc càlid, text negre i contorn
arrodonit. Té més contrast i es reconeix de seguida com a botó, però pesa més
en la composició. La resta de la portada i el header són idèntics a A.

En totes dues variants, mantenim el [MyRestoo existent](https://canventura.myrestoo.net/ca/reservar)
com a destí, la navegació amb teclat i controls de com a mínim 44 px d'alçada.

## Materials de revisió

- [Maqueta HTML amb selector A/B](../design/proposals/header-reserva-v1.html).
- A: [escriptori](../design/proposals/header-reserva-v1-a-desktop.png) i
  [mòbil](../design/proposals/header-reserva-v1-a-mobile.png).
- B: [escriptori](../design/proposals/header-reserva-v1-b-desktop.png) i
  [mòbil](../design/proposals/header-reserva-v1-b-mobile.png).

La maqueta utilitza les fonts, el logo i la fotografia originals del projecte.
És un fitxer de revisió separat de la web. Es pot obrir al navegador; els
enllaços de navegació apunten a la web local al port 4321. El selector A/B és
a sota de la portada. No afegim aquesta proposta a les rutes de producció.

## Següent fase proposada

1. Revisar la variant de reserva i la distribució del header amb l'usuari.
2. Implementar la direcció escollida als components compartits, els quatre
   idiomes, la pàgina de carta i els estats de scroll.
3. Comprovar escriptori/mòbil, teclat, desplegables, contrast i reserva;
   executar la compilació i actualitzar les captures de la web.

## Verificació de la proposta

- Maquetes renderitzades en Chromium a 1440 × 1000 i 390 × 844, variants A/B.
- Fotografies i logo carregats; fonts locals disponibles.
- Sense desbordament horitzontal en aquests dos formats.
- Selector d'idioma i menú de mòbil obren els seus enllaços.
- Revisió visual de les captures. Els estats de scroll encara no estan implementats.

## Implementació acordada

- L'usuari accepta la proposta i escollim l'opció A recomanada.
- Durant la implementació demana situar la reserva a baix a l'esquerra i
  canviar «Carta i menús» per «Carta». Aquesta indicació substitueix la
  posició centrada de la proposta inicial. Els originals de revisió es conserven.
- Reserva de portada alineada amb el marge esquerre, amb el text de Llívia
  just a sobre. Text curt de carta també en castellà, francès i anglès.
- Seguint una nova indicació de l'usuari, tots els textos del header,
  inclosos els desplegables, van en monoespai, majúscules i amb espaiat
  de `0.12em` entre lletres.
- Header fix, navegació centrada en escriptori i desplegables d'idioma i
  menú al mòbil. Fons transparent sobre el degradat de portada; negre amb
  línia fina després de començar el scroll i a la pàgina de carta.
- En escriptori, la reserva persistent és l'enllaç del header. Al mòbil,
  la barra inferior apareix quan la reserva de portada queda per sobre de
  l'àrea visible, tenint en compte l'alçada del header. A la carta és visible
  des de l'inici. Respecta l'àrea segura del dispositiu.
- Desplegables natius: teclat, Escape amb retorn de focus, tancament en
  clicar fora o sortir amb Tab i un únic desplegable obert cada vegada.
- Els canvis són compartits per portada i carta en els quatre idiomes.
- Els originals fotogràfics es mantenen; no s'han comprimit ni substituït.

### Verificació de la implementació

- Compilació final `npm run build`: superada.
- Chromium: 25 casos superats, amb els quatre idiomes a amplades 320,
  390, 700, 768 i 1440, les quatre cartes i un viewport de 320 × 560.
- Selector d'idioma, menú, Tab, Escape, retorn de focus, clic exterior,
  tancament entre desplegables i enllaços de reserva comprovats.
- Reserva persistent comprovada en scroll normal i salt directe, incloent
  el cas en què la reserva de portada queda inicialment sota el viewport.
- Cap desbordament de pàgina ni error JavaScript observat als casos comprovats.
- Monoespai, majúscules i espaiat del header verificats al navegador.
- Axe: cap incidència automàtica WCAG A/AA fins a 2.1 en els 14 estats
  comprovats de portada, desplegables, scroll i carta. No és una auditoria
  manual completa d'accessibilitat.
- Captures finals: [escriptori](../design/previews/2026-10-04/header-reserva-v1/desktop-portada.png),
  [mòbil](../design/previews/2026-10-04/header-reserva-v1/mobile-portada.png),
  [menú mòbil](../design/previews/2026-10-04/header-reserva-v1/mobile-menu.png) i
  [reserva en scroll](../design/previews/2026-10-04/header-reserva-v1/mobile-scroll.png).
- [Resultats del navegador](../design/previews/2026-10-04/header-reserva-v1/verification.json)
  i [accessibilitat](../design/previews/2026-10-04/header-reserva-v1/accessibility.json).
- Sense commits ni desplegament públic.

## Registre de canvis

- 2026-10-04: recollit el feedback de l'usuari, revisades les referències,
  preparades dues variants de reserva amb una capçalera comuna i guardada la
  proposta. En revisió; sense modificar els components de la web ni fer commits.
- 2026-10-04: proposta acceptada i implementació iniciada. Incorporades les
  indicacions posteriors: reserva a baix a l'esquerra i menú «Carta».
- 2026-10-04: tipografia del header ajustada a monoespai, majúscules i
  espaiat entre lletres, segons la nova indicació de l'usuari.
- 2026-10-04: implementació i verificació completades; captures finals i
  resultats guardats, amb la web local disponible al port 4321.
- 2026-10-04: nova iteració de simplificació encarregada per l'usuari:
  eliminada la línia inferior del header, degradat superior ampliat de
  190 a 280 px i lleugerament enfosquit, reserva del header amagada a la
  portada fins que la reserva principal queda fora de l'àrea visible.
  Retirats «Segueix el fil» i el bloc «Llívia · La Cerdanya / A taula des
  de 1977» de la portada. Mateix comportament en els quatre idiomes.
- 2026-10-04: simplificació verificada amb `npm run build` i 12 casos
  de navegador: portada inicial i scroll en els quatre idiomes, salts
  directes en pantalles baixes i carta en escriptori/mòbil. Sense reserva
  duplicada en arribar, sense desbordament i sense errors JavaScript.
  Captures de [portada d'escriptori](../design/previews/2026-10-04/header-reserva-minimal/desktop-portada.png),
  [portada mòbil](../design/previews/2026-10-04/header-reserva-minimal/mobile-portada.png),
  [header en scroll](../design/previews/2026-10-04/header-reserva-minimal/desktop-scroll.png)
  i [resultats](../design/previews/2026-10-04/header-reserva-minimal/verification.json).
- 2026-10-04: l'usuari accepta la versió actual i autoritza commit i push al
  repositori de GitHub. La prohibició temporal de fer commits queda revocada.
