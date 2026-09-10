# Course Composition

Course Composition is the page-level visual layer for Quick Courses. It provides canvases, full-width section fields, spatial rhythm, background treatments and future progressive page-level behavior. It is demonstrated in the Showcase at `/showcase/course-composition/` through a continuous visual stress test, not a production course template.

## Relationship To Components And Patterns

- **Components** answer: "What governed building block exists?" They own their semantic API, accessibility behavior and internal presentation.
- **Course Composition** answers: "What visual environment can those building blocks inhabit?" It establishes the page canvas, visual fields and media reach before a component is selected.
- **Patterns** answer: "When and why should these ingredients be combined?" They remain governed guidance recipes in `src/data/patterns.ts`; they are not rendering schemas or page templates.

Course Composition does not add a second component registry or migrate Pattern guidance. Individual component pages remain focused on lifecycle, options, behavior and resilience.

## Section Fields

`SectionField.astro` is the small shared primitive for full-viewport course fields. Its outer canvas reaches the viewport edges while its inner `reading` or `wide` grid controls line length and gutters. It offers only five semantic treatments:

- `open` for the default editorial canvas.
- `subtle` for a quiet grouping field using the existing blush token.
- `brand` for a high-emphasis plum field.
- `dark` for an intentional high-contrast transition or key message.
- `image` for a visual context field with a named `media` slot and contrast-protecting overlay.

Use the field to communicate grouping, hierarchy or pacing. It does not turn ordinary content into panels, and interactive components retain their own meaningful internal boundaries.

Eyebrows are optional context or emphasis devices, not a required section-heading structure. Prefer a direct heading, heading with supporting copy, statement, quote, metric or image-led opening when a small contextual label adds no meaning.

Do not place two visually dominant treatments directly beside one another unless their content deliberately forms one visual sequence. Separate unrelated image-led, strong-brand or dark moments with open content, whitespace, a subtle field or another meaningful transition. This is a rhythm principle, not a requirement to alternate surfaces mechanically.

## Showcase Adoption

The Layouts, Display Interactions, Assessment Interactions and Multimedia component-review pages use SectionField as shared Showcase presentation chrome. Their restrained open/subtle rhythm separates neighbouring specimens while the learner-facing component remains independent inside each field. Lifecycle labels, guidance, options and review controls remain Showcase-owned content; a surrounding tint is not part of the component API or its default learner presentation.

## Deliberate Deferrals

Sticky storytelling, parallax, image reveal, scroll-linked effects and other motion remain future Course Composition possibilities. They require a separate accessibility, reduced-motion and mobile review before they become part of the Kit. Pattern recipes can later describe when a field and a component form a useful learning moment; this work does not expand the current Pattern set.
