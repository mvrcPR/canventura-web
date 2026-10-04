---
name: agent-instruction-engineering
description: Create, revise, or review repository language that shapes agent behavior, including AGENTS.md, local SKILL.md files, agent-facing documentation, editorial rules, checklists, and structured natural-language contracts. Use when changing instructions, deciding where guidance belongs, resolving duplicated or conflicting rules, or validating that an instruction change is concise, generalizable, reachable, and supported by the repository's real behavior.
---

# Agent Instruction Engineering

Prompts, skills, agent instructions, and natural-language behavioral specs are
product code. Their changes stay small, protect reusable contracts, and remain
reviewable from evidence.

## Working With Agent Language

Creation, editing, review, and maintenance share one process. The intended
claim determines how much evidence completes it.

1. **Purpose.** The intended meaning or outcome provides the criterion for
   judging the language.
2. **Inventory.** Before editing, search existing product surfaces and
   behavior-shaping sources for the concept. Identify the current contract
   owner and any conflicts; consumers should link to a correct reachable owner
   instead of restating it.
3. **Ownership.** The narrowest authoritative source reaches the relevant
   consumers without duplicating knowledge or affecting unrelated agents.
4. **Language.** Clear, explanatory, and generalizable wording remains useful
   when the immediate example changes.
5. **Evidence.** Validation stays proportional to the claim: wording changes
   need diff and structural review; documented contracts need comparison with
   existing behavior or tests; generated content needs synchronization checks.
   A claimed change in agent behavior requires causal and multi-run evidence.

## Where The Language Belongs

Each behavior-shaping surface has a different reach, context cost, and audience.
Broad surfaces carry compact shared invariants, while specialized guidance
stays with its owner so it does not consume unrelated context or alter
unrelated agents.

| Knowledge or behavior | Owner |
|---|---|
| Repository-wide rules agents must follow | Root `AGENTS.md` |
| Stable product concepts, supported behavior, setup, and operations | `README.md` or the narrowest owning source |
| Reusable procedure, decision process, or tool workflow | The relevant versioned `.agents/skills/<name>/SKILL.md` |
| Skill-specific schemas or detailed policies | That skill's `references/` directory |
| Content evidence, drafts, reviews, and unresolved decisions | The source owned by that content workflow, if present |
| Plans, decisions, and work history | The repository's existing plan or history owner |
| Executable commands and deterministic behavior | `package.json`, scripts, configuration, source, and tests |
| User-visible website copy | The owning page or component and the affected locale files when localized |

Treat `.agents/skills/` as authored, versioned source in this repository. Do
not assume a generated profile, trait, publication, board, bot, or network-agent
pipeline exists unless the repository contains and documents it.

When ownership is unclear, actual consumers provide better evidence than the
filename or current location.

Instructions may select or explain executable behavior, but they do not
implement it. When a documented command or guarantee does not exist, change
the owning code or narrow the language instead of asserting the desired state.

## Write For Generalization

- Natural-language edits are patch-oriented because existing wording may encode
  reviewed constraints that are easy to lose during regeneration. The smallest
  local diff that carries the new meaning preserves unaffected contracts and
  makes the change easier to attribute and review. Rewriting, reordering,
  condensing, or cleaning up unrelated text constitutes a separate change.
- Explanatory, declarative guidance generalizes better than bare directives
  because it gives the agent a decision model when circumstances change. The
  invariant, its reason, and the consequence of violating it carry the
  instruction. Direct imperatives are reserved for safety boundaries where
  compliance itself matters; deterministic contracts are expressed as
  verifiable facts and enforced by tests or tooling.
- Concise guidance is easier to retrieve, compose, and follow. The best wording
  is the shortest version that preserves the invariant, its reason, and the
  consequence of violating it. Repetition, general background knowledge, and
  text that does not change a repository-specific decision spend context without
  improving the result.
- One consistent term per concept avoids synonyms being interpreted as distinct
  rules or behaviors after composition.
- A preferred default plus its escape condition provides a selection criterion
  that an undifferentiated menu leaves the agent to invent.
- Specificity follows risk. Contextual work needs room for judgment, recurring
  shapes benefit from a preferred pattern, and fragile deterministic operations
  justify exact commands or validators. Absolute language belongs to safety,
  security, or data-loss boundaries; elsewhere it blocks valid adaptations.
- Examples clarify an abstract rule without defining it. Guidance coupled to an
  exact title, entity, wording, command, or sequence measures recognition of the
  fixture instead of general behavior.

The following patterns signal a misplaced or hard-to-maintain change:

- A new rule introduced before checking whether existing guidance is missing,
  unclear, contradicted, misplaced, or unavailable can preserve the real cause
  while adding another conflict.
- Knowledge duplicated across docs, skills, prompts, and tests, or promoted
  from a temporary checklist, backlog, or run history, creates copies that drift
  from the owning contract.
- Hardcoded routing lists or topic-specific exceptions duplicate discovery and
  become stale secondary registries.

## Skills And Routing

The frontmatter `description` is routing behavior, not summary prose. It names
both the capability and its concrete activation contexts because vague or
one-sided descriptions cause missed and accidental activation.

Treat a `description` edit as a high-reach routing-contract change, not as a
convenient way to steer one trajectory. Preserve it unless selection and
non-selection evidence show that its routing boundary is itself the owner;
do not add disclaimers, fixture-specific exclusions, or trigger wording merely
to reduce tool calls, compensate for a CLI/API/evaluation issue, or make one
eval pass. A justified edit validates both an intended activation and a nearby
case that must remain inactive.

`SKILL.md` stays focused on the core procedure because its full body enters the
context whenever the skill activates. Bundled resources earn their place when
the skill owns them and they avoid repeated work or irrelevant context. Direct
links and explicit loading conditions make those resources discoverable
without duplicating their content.

Keep `agents/openai.yaml` aligned with the skill's purpose and ensure its
default prompt explicitly names the skill. Do not introduce metadata,
generated-source claims, or publication rules without a local consumer and
implementation.
