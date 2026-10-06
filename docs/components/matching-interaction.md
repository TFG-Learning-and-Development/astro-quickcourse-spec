# Matching Interaction

Status: In Review

## Purpose

Use `MatchingInteraction` for a short formative activity where each item has a corresponding match or category. Each source appears beside a native select. Feedback appears when the learner chooses an answer. The component does not calculate scores or send SCORM interactions.

## Authoring model

Each activity needs a stable `id`, at least two sources and targets, and a `correctTargetId` for each source. IDs must be unique within their respective sets. Source and target order is preserved. Keep activities to about three to six sources so the choices remain easy to scan.

- `matchingMode="one-to-one"` (default) requires a unique target for every source. Once answered correctly, that target is disabled in the remaining selects.
- `matchingMode="categorise"` permits the same category to answer multiple sources. Correct categories remain available everywhere.
- Instant feedback is the only v1 feedback mode. A correct row locks with its selected answer visible. An incorrect row remains editable for an immediate retry.
- Optional `instruction` adds context when the prompt alone is insufficient. `targetLabel` names the select choice in its placeholder, for example `team` or `practice`.
- Source `supportingText` appears below its label. Target `supportingText` remains in the authored data model but is not presented as a second line in native select options; keep target labels self-contained.

```astro
<MatchingInteraction
  id="support-route-match"
  title="Match each customer need to the right route"
  prompt="Choose the team that can resolve each customer need."
  targetLabel="team"
  matchingMode="one-to-one"
  sources={[
    { id: "refund", label: "A refund has not reflected.", correctTargetId: "payments" },
    { id: "password", label: "A customer cannot reset a password.", correctTargetId: "access" },
  ]}
  targets={[
    { id: "payments", label: "Payments support" },
    { id: "access", label: "Account access support" },
  ]}
/>
```

## Behaviour and accessibility

Every native select has a visible associated source label. It uses the installed DaisyUI select styling at a touch-friendly size, including its enhanced rounded, shadowed picker in browsers that support it, with the Kit's focus and feedback colours. A correct answer shows the Kit success icon, border, and background; an incorrect answer shows the corresponding error treatment. Hidden state text and a polite live region announce Correct or Incorrect. The selected value stays visible in a locked row. The select uses native keyboard and touch operation. There are no drag-and-drop controls or custom select roles.

The title, prompt, source labels, and choices render without JavaScript and remain available in print. Evaluation and target locking need JavaScript. Native select popups normally display options on one line; use concise, distinct target labels so they remain readable on narrow screens.

## Responsive layout

At widths of 768px and above, each row uses a two-column grid for source and answer. The list uses equal `1fr` row tracks, which grow to the tallest content naturally without a fixed height. At narrow widths, source and answer stack and rows return to their natural heights. All tracks permit text wrapping and the select has a touch-sized minimum height.

## Scope

The earlier source-then-target button flow, Check Answer, single-attempt mode, reset, custom feedback messages, and `lockOnCorrect` are removed from this Draft v1 API. This keeps the learner interaction focused on immediate, retryable formative feedback.
