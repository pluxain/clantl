export type Severity =
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type Locale = "en" | "fr";

export type Checklist = {
  items: KillerItem[];
  locale: Locale;
  nextStep: Step;
  flow: string;
  resetCount: number;
  step: Step;
};

export type KillerItem = {
  verified: boolean;
  keyword: string;
  label: string;
};

export type Step = "Avant Induction" | "Induction";
