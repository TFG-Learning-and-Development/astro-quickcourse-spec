export type MatchingInteractionMode = "one-to-one" | "categorise";

export interface MatchingInteractionTarget {
  id: string;
  label: string;
  supportingText?: string;
}

export interface MatchingInteractionSource {
  id: string;
  label: string;
  supportingText?: string;
  correctTargetId: string;
}

export interface MatchingInteractionProps {
  id: string;
  eyebrow?: string;
  title: string;
  prompt: string;
  instruction?: string;
  targetLabel?: string;
  matchingMode?: MatchingInteractionMode;
  sources: MatchingInteractionSource[];
  targets: MatchingInteractionTarget[];
}
