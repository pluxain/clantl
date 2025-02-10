import { realms, steps } from "@constants";

export type Url = string;

export type Severity =
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type Locale = "en" | "fr";

export type Realm = (typeof realms)[number];

export type Step = (typeof steps)[number];

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
