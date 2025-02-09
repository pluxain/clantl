import type { Checklist, Realm, Step } from "@types";
import { fetcher } from "./fetcher";

export async function getChecklist(
  realm: Realm,
  step: Step,
): Promise<Checklist> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Note: for now we do not consider locale as a level of depth.
  // Actually, the realm and step should be localized.
  return fetcher<Checklist>(`/data/${realm}/${step}/checklist.json`);
}
