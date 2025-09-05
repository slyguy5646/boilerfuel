import { LocationsByType } from "@boilerfuel/types";

const URL = "http://localhost:3000";

export async function getData() {
  const res = await fetch(URL);

  if (!res.ok) return null;

  const data = (await res.json()) as LocationsByType;

  console.log(data.diningCourts[0].normalHours);

  return data;
}
