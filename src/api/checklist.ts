import type { Checklist, Realm, Step } from "@types";

export async function getChecklist(
  _realm: Realm,
  _step: Step,
): Promise<Checklist> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    items: [
      {
        label: "matériel d'intubation",
        keyword: "vérifié",
        verified: false,
      },
      { label: "oxygène", keyword: "disponible", verified: false },
      {
        label: "circuit / Ballon de réanimation",
        keyword: "testé",
        verified: false,
      },
      { label: "valve d'échappement", keyword: "Ouverte", verified: false },
      {
        label: "ballonnet sonde endotrachéale",
        keyword: "étanche",
        verified: false,
      },
      { label: "cathéter", keyword: "fonctionnel", verified: false },
      {
        label: "procédure de réanimation",
        keyword: "prête",
        verified: false,
      },
      {
        label: "responsable de la surveillance",
        keyword: "nommé",
        verified: false,
      },
    ],
    locale: "fr",
    nextStep: "induction",
    realm: "anesthesie",
    resetCount: 0,
    step: "avant-induction",
  };
}
