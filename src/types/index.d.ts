export type Severity =
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type Checklist = {
  items: KillerItem[];
  nextStep: Step;
  realm: string;
  resetCount: number;
  step: Step;
};

export type KillerItem = {
  verified: boolean;
  keyword: string;
  label: string;
};

export type Step = "Avant Induction" | "Induction";
