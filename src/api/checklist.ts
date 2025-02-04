import type { Checklist, Realm, Step } from "@types";

export async function getChecklist(
  realm: Realm,
  step: Step,
): Promise<Checklist> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Note: for now we do not consider locale as a level of depth.
  // Actually, the realm and step should be localized.
  const res = await fetch(`/data/${realm}/${step}/checklist.json`);
  return res.json();
}
