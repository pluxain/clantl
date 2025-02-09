export type Url = string;

export type Severity =
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type Locale = "en" | "fr";

export type Realm = "anesthesie";

export type Step =
  | "init"
  | "preparation-et-premedication"
  | "induction"
  | "chirurgie"
  | "reveil";

export type ChecklistName =
  | "avant prémédication"
  | "avant induction"
  | "avant chirurgie"
  | "avant réveil";

export type Checklist = {
  items: KillerItem[];
  locale: Locale;
  name: ChecklistName;
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
