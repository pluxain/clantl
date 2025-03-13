import type { Checklist, Realm, Step } from "#types";
import { ApiError, HttpNotFoundError, InternalServerError } from "./ApiError";
import { fetcher } from "./fetcher";

export async function getChecklist(
  realm: Realm,
  step: Step,
): Promise<Checklist> {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Note: for now we do not consider locale as a level of depth.
  // Actually, the realm and step should be localized.
  try {
    return await fetcher<Checklist>(`/data/${realm}/${step}/001.json`);
  } catch (err) {
    if (err instanceof HttpNotFoundError) {
      // eslint-disable-next-line no-console
      console.error("HttpNotFoundError", err.kind, err);
    }

    if (err instanceof InternalServerError) {
      // eslint-disable-next-line no-console
      console.error("InternalServerError", err.kind, err);
    }

    if (err instanceof ApiError) {
      // eslint-disable-next-line no-console
      console.error("ApiError", err.kind, err);
    }

    throw err;
  }
}
