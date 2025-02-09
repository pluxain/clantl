import type { Url } from "@types";

export async function fetcher<T>(url: Url): Promise<T> {
  // Note: Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(url, {
    // Note: for now we only handle JSON
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return res.json();
}
