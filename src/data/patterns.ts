export type PatternStatus = "idea" | "concept" | "draft" | "in-review" | "approved" | "deprecated";

export interface PatternDefinition {
  id: string;
  name: string;
  status: PatternStatus;
  purpose: string;
  goodFor: string[];
  avoidFor: string[];
  expectedContentShape: string[];
  requiredIngredients: string[];
  optionalIngredients: string[];
  compositionRecipe: string[];
  likelyKitSystems: string[];
  semanticContentRole: string;
  responsiveBehavior: string[];
  accessibilityConsiderations: string[];
  visualRhythmIntent: string;
  authoringGuidance: string[];
  alternatives: string[];
  pilotEvidence: string;
}

export const patternStatusLabels: Record<PatternStatus, string> = {
  idea: "Idea",
  concept: "Concept",
  draft: "Draft",
  "in-review": "In Review",
  approved: "Approved",
  deprecated: "Deprecated",
};

export const patterns: PatternDefinition[] = [
  {
    id: "course-opener",
    name: "Course Opener",
    status: "concept",
    purpose: "Create one coherent opening composition that connects orientation, course promise and outcomes.",
    goodFor: ["Course starts", "Module starts", "Short product or process introductions"],
    avoidFor: ["Normal mid-course sections", "Repeated chapter breaks", "Long objective lists that need their own review"],
    expectedContentShape: ["Course title", "Short orientation statement", "Three to five outcomes", "Optional supporting statement"],
    requiredIngredients: ["A governed Hero or equivalent opening treatment", "Visible outcomes", "A clear relationship between the opening message and the first learning task"],
    optionalIngredients: ["Short context note", "Start action when the course has navigation", "Subtle supporting surface"],
    compositionRecipe: [
      "Lead with the course promise, not a detached decorative hero.",
      "Place outcomes close enough to the Hero to read as the same opening system.",
      "Use spacing, surface and alignment to connect the Hero and outcomes without expanding the Hero API.",
    ],
    likelyKitSystems: ["MinimalHero", "ImageOverlayHero", "Typography System", "QuickCourseIcon"],
    semanticContentRole: "Outcomes remain ordinary semantic list content unless a future approved objective component is justified.",
    responsiveBehavior: ["Hero and outcomes stack in source order on narrow screens", "Outcomes remain visible without horizontal scrolling", "Opening should not consume the entire mobile viewport before outcomes appear"],
    accessibilityConsiderations: ["Use one page-level h1", "Keep outcomes as text", "Do not place required outcomes only in imagery or animation"],
    visualRhythmIntent: "One strong opening group that gives the course a deliberate beginning before ordinary sections begin.",
    authoringGuidance: ["Use for the first course or module section only", "Keep the summary concise", "Do not turn outcomes into cards unless the outcomes genuinely need separated scanning"],
    alternatives: ["Plain heading and outcomes list for very small courses", "Image Overlay Hero when source-approved imagery carries real context"],
    pilotEvidence: "Pilot Course #1 showed that a good Minimal Hero and a good outcomes list can still feel disconnected without a governed opening composition.",
  },
  {
    id: "explain-example-check",
    name: "Explain, Example, Check",
    status: "concept",
    purpose: "Group explanation, worked example and immediate practice into one visible instructional sequence.",
    goodFor: ["Calculations", "Rules of thumb", "Short procedures", "Concepts that learners must apply immediately"],
    avoidFor: ["Unrelated facts", "Long multi-topic explanations", "Assessment-only sections"],
    expectedContentShape: ["Concise explanation", "Worked example or structured demonstration", "One formative check"],
    requiredIngredients: ["Explanatory semantic content", "Worked example", "ChoiceQuestion or another approved formative component"],
    optionalIngredients: ["Short guidance note", "Simple visual sequence", "DefinitionList for terms that support the example"],
    compositionRecipe: [
      "Treat the three parts as one learning moment rather than three unrelated sections.",
      "Use a visible example treatment between explanation and assessment.",
      "Let the check inherit context from the explanation and example rather than restating everything.",
    ],
    likelyKitSystems: ["ChoiceQuestion", "DefinitionList", "Typography System"],
    semanticContentRole: "Explanation and example should remain normal text, lists, definitions or tables where those are clearer than interaction.",
    responsiveBehavior: ["Example steps collapse cleanly to one column", "Question remains below the example in reading order", "No horizontal scrolling for values or answer options"],
    accessibilityConsiderations: ["Do not rely on layout position alone to explain sequence", "Use ordered lists when order matters", "Keep feedback discoverable and keyboard-operable through the embedded question component"],
    visualRhythmIntent: "Create a compact arc: understand the rule, see it applied, then practise while the context is still fresh.",
    authoringGuidance: ["Use one check per sequence", "Do not add a question if the source does not supply or support one", "Keep guidance shorter than the example"],
    alternatives: ["Ordinary prose only for concepts that do not require immediate practice", "Separate sections when the example needs substantial explanation"],
    pilotEvidence: "The Pilot payment-date section was stronger because the date rule, worked example and question naturally formed one learning arc.",
  },
  {
    id: "compare-two-paths",
    name: "Compare Two Paths",
    status: "concept",
    purpose: "Present two related procedures, plans or journeys where learners must understand both the shared logic and the differences.",
    goodFor: ["Online versus in-store flows", "Plan A versus Plan B", "Before/after behaviours", "Two role-based procedures"],
    avoidFor: ["Single linear procedures", "Dense policy tables", "Three or more unrelated options"],
    expectedContentShape: ["Brief introduction", "Two labelled paths", "Parallel steps or characteristics", "Shared takeaway or guidance"],
    requiredIngredients: ["Two visible labelled groups", "Semantic lists or definitions", "A shared takeaway"],
    optionalIngredients: ["Recommendation marker", "Small note about when to choose each path", "Supporting image when source-approved"],
    compositionRecipe: [
      "Introduce the decision or comparison before the two paths.",
      "Keep both paths visible together on desktop.",
      "Use consistent internal structure so differences are easy to compare.",
      "Close with a shared guidance note rather than a third competing panel.",
    ],
    likelyKitSystems: ["DefinitionList", "Typography System", "QuickCourseIcon"],
    semanticContentRole: "Ordered lists, definition lists and headings carry the procedure; the Pattern provides grouping and rhythm.",
    responsiveBehavior: ["Two paths sit side by side only when space allows", "Narrow screens stack in logical source order", "Each path keeps its own heading when stacked"],
    accessibilityConsiderations: ["Use real headings for each path", "Use ordered lists when steps must happen in sequence", "Do not communicate recommendation by colour alone"],
    visualRhythmIntent: "Make comparison feel intentional and balanced without inventing a stepper component.",
    authoringGuidance: ["Use when comparison is central to the learning purpose", "Keep path labels short", "Avoid hiding one path inside tabs when learners need to compare"],
    alternatives: ["NumberedProcess for one linear flow", "Simple DefinitionList for two non-procedural terms"],
    pilotEvidence: "The Pilot online versus in-store section was one of the strongest because the content had inherent comparative structure.",
  },
  {
    id: "scenario-practice",
    name: "Scenario Practice",
    status: "concept",
    purpose: "Make several related formative questions feel like one coherent scenario activity.",
    goodFor: ["Customer conversations", "Operational judgement practice", "Integrated end-of-course checks", "Short decision sequences"],
    avoidFor: ["Summative scoring", "Unrelated question banks", "Questions without source-supported answers"],
    expectedContentShape: ["Scenario setup", "Stable context details", "Two to five related questions", "Optional closing reinforcement"],
    requiredIngredients: ["Scenario introduction", "Existing ChoiceQuestion instances", "Clear source-grounded answer handling"],
    optionalIngredients: ["Progress labels", "Customer quote", "Short reinforcement after the sequence"],
    compositionRecipe: [
      "Establish a stable scenario identity before questions begin.",
      "Group questions inside the scenario context rather than treating each as a separate section.",
      "Use short question titles and restrained feedback when detailed feedback is not source-supplied.",
      "Close the activity with a brief reinforcement, not a score dashboard.",
    ],
    likelyKitSystems: ["ChoiceQuestion", "Typography System"],
    semanticContentRole: "Scenario setup is ordinary semantic content; ChoiceQuestion handles each learner response.",
    responsiveBehavior: ["Scenario context remains before the questions", "Question cards stack with enough breathing room", "Repeated controls remain reachable without horizontal overflow"],
    accessibilityConsiderations: ["Keep scenario facts as text", "Use a single scenario heading before repeated question headings", "Embedded questions must remain keyboard-operable and announce feedback"],
    visualRhythmIntent: "Create continuity across repeated questions so the learner feels inside one situation, not a form-like stack.",
    authoringGuidance: ["Use only when questions share one context", "Do not add scoring unless an assessment system is approved", "Record any inferred answers and their source teaching"],
    alternatives: ["One standalone ChoiceQuestion for a single check", "Plain reflection prompt when no correct answer is supplied"],
    pilotEvidence: "Pilot Course #1's five final questions were accurate but felt visually repetitive and insufficiently connected as one shop-floor scenario.",
  },
  {
    id: "course-close",
    name: "Course Close",
    status: "concept",
    purpose: "Create a deliberate ending that reinforces the course value and returns to workplace application.",
    goodFor: ["Course endings", "Module endings", "Post-practice reinforcement"],
    avoidFor: ["Generic congratulations with no learning point", "LMS completion tracking", "Large calls to action without source support"],
    expectedContentShape: ["Completion or reinforcement message", "One key takeaway", "Optional next action if supplied"],
    requiredIngredients: ["Concise closing heading", "Reinforcement copy", "Workplace or application connection"],
    optionalIngredients: ["Takeaway list", "Checklist", "Source-supported next step"],
    compositionRecipe: [
      "Make the close feel different from an ordinary information section.",
      "Reconnect to the learner's real task or workplace context.",
      "Keep the final note short enough to feel conclusive.",
    ],
    likelyKitSystems: ["Typography System", "QuickCourseIcon"],
    semanticContentRole: "Closing messages remain normal headings, paragraphs and lists unless a future approved summary component is used.",
    responsiveBehavior: ["Closing surface stacks naturally", "Any takeaway list remains readable at narrow width", "No fixed height or large empty art-direction area"],
    accessibilityConsiderations: ["Do not imply completion tracking unless it exists", "Keep next actions explicit if present", "Do not rely on celebratory visuals to convey completion"],
    visualRhythmIntent: "Give the learner a clear final beat that feels intentional rather than a leftover panel.",
    authoringGuidance: ["Use once near the end of a course", "Avoid a second Hero unless the source or design direction calls for it", "Keep workplace transfer explicit"],
    alternatives: ["Plain final paragraph for very short informational pages", "Summary layout if a future approved primitive exists"],
    pilotEvidence: "The Pilot completion section functioned, but it did not create a strong final learning beat.",
  },
];

export function getPattern(id: string) {
  return patterns.find((pattern) => pattern.id === id);
}
