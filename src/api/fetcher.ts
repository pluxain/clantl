import type { Url } from "@types";
import { ApiError, HttpNotFoundError, InternalServerError } from "./ApiError";

// TODO: handle fetch errors like CORS or Network Errors (try/catch around fetch and throw dedicated ApiError)
export async function fetcher<T>(url: Url): Promise<T> {
  // Note: Simulate delay
  // await new Promise((resolve) => setTimeout(resolve, 500));

  const res = await fetch(url, {
    // Note: for now we only handle JSON
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    if (res.status === 404) {
      throw new HttpNotFoundError(res.statusText);
    }

    if (res.status === 500) {
      throw new InternalServerError(res.statusText);
    }

    throw new ApiError(res.status, "Unknown Api Error", res.statusText);
  }
}
