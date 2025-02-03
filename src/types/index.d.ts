export type Severity =
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type Locale = "en" | "fr";

export type Realm = "anesthesie";

export type Flow = {
  realm: Realm;
  steps: Step[];
};

export type Step = "avant-induction" | "induction";

export type Checklist = {
  items: KillerItem[];
  locale: Locale;
  nextStep: Step;
  realm: Realm;
  resetCount: number;
  step: Step;
};

export type KillerItem = {
  verified: boolean;
  keyword: string;
  label: string;
};
