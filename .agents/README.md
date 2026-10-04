# Eines de treball del projecte

Les pautes compartides viuen a [AGENTS.md](../AGENTS.md) i els plans i el seu
històric a [plans/README.md](../plans/README.md).

La carpeta `skills/` conté els fluxos reutilitzables del projecte. Cada skill
conserva el seu `SKILL.md` i els scripts, les referències o els recursos de suport
que necessita. Les pautes de marca i les decisions de la web viuen als seus
propietaris, `AGENTS.md` i `plans/`, perquè les skills continuïn sent reutilitzables.

```text
.agents/
  README.md
  skills/
    <nom-de-la-skill>/
      SKILL.md
```

## Skills instal·lades

| Skill | Funció |
| --- | --- |
| [agent-instruction-engineering](skills/agent-instruction-engineering/SKILL.md) | Mantenir instruccions amb responsabilitats clares i evidència proporcional |
| [ui-ux-pro-max](skills/ui-ux-pro-max/SKILL.md) | Consultar recursos de disseny i UX respectant la direcció visual acordada |
| [copywriting](skills/copywriting/SKILL.md) | Redactar i revisar textos i crides a l'acció |
| [seo-geo-content](skills/seo-geo-content/SKILL.md) | Revisar continguts segons la intenció de cerca i l'evidència |
| [technical-seo](skills/technical-seo/SKILL.md) | Comprovar HTML, metadades, rutes, idiomes i lliurament real |

Importades de `Protofy-xyz/vento-website` i generalitzades. La procedència i
els fitxers adaptats consten a [skill-sources.json](skill-sources.json), i el
treball queda registrat al [pla 0002](../plans/0002-2026-10-04-skills-v1.md).

Per invocar una skill, es pot esmentar `$nom-de-la-skill`. Per editar-les,
s'aplica `agent-instruction-engineering`; per comprovar l'estructura s'utilitza
el validador de `skill-creator`. Aquestes validacions no demostren per si soles
que un agent prendrà sempre la decisió correcta.

Convencions contrastades amb la documentació oficial d'OpenAI sobre
[AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) i
[skills locals](https://learn.chatgpt.com/docs/build-skills).
