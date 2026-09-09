# Pattern Layer

Patterns are governed composition recipes for turning approved source material into a deliberate learning experience. They sit above Components and Presets and guide how reusable pieces, semantic content, layout, rhythm, surfaces and interactions work together.

## Components, Presets And Patterns

- **Component:** a governed reusable implementation, such as a Hero, ChoiceQuestion or DefinitionList. The component owns its API, accessibility behaviour and production styling.
- **Preset:** an approved normal configuration of one component, such as a compact multiple-choice question or a standard video treatment. A preset narrows a component choice; it does not define a whole learning sequence.
- **Pattern:** a governed composition recipe. It explains when and how to combine components, semantic HTML, spacing, surfaces, media and instructional flow into a recognisable treatment.

Patterns answer: "How should these pieces be composed into a deliberate learning experience?" They do not replace the question: "Which component should I use?"

## What Patterns Solve

Patterns improve course-level composition where individually sensible choices can still feel flat or document-like. They help Course Builders create stronger:

- openings and endings;
- grouping between explanation, example and practice;
- section-to-section rhythm;
- procedural comparisons;
- scenario continuity;
- hierarchy between required content and supporting guidance.

Patterns should evolve from real course evidence, design review and learner-facing implementation work. Pilot Course #1 showed that correct component selection alone did not create enough art direction, especially around opening composition, repeated questions, repeated tips and final scenario practice.

## What Patterns Do Not Solve

Patterns are not page templates, dynamic renderers, giant Astro components, JSON schemas, arbitrary CSS recipes, course generators or a second component library. They do not make every section special, and they are not mandatory where ordinary semantic content is clearest.

Do not use a Pattern to invent capabilities that belong in a Component or Preset. If repeated usage reveals a missing compact question treatment, callout primitive or layout primitive, record that evidence separately instead of hiding it inside local Pattern CSS.

## Authoring Guidance

Start with the source material. Identify the instructional need, then choose the simplest governed solution:

1. Use ordinary semantic content when the content reads best as headings, paragraphs, lists, figures, tables or definitions.
2. Use a Component or Preset when a single reusable system provides the needed behaviour.
3. Use a Pattern when the learning value depends on the relationship between several pieces.

Pattern definitions should describe expected content shape, required and optional ingredients, responsive behaviour, accessibility considerations, visual rhythm intent and alternatives. They should not duplicate component APIs. For example, a Pattern should say "use an appropriate governed Hero" rather than listing every Hero prop.

Pattern specimens in the Showcase are for human review. Until approved through governance, they should remain Concept or Draft work and should not be exported in the production release manifest.
