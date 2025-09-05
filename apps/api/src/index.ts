import { Hono } from "hono";

import { getData } from "./lib/apollo";
import { DiningCourt, LocationsByType } from "@boilerfuel/types";
import { serve } from "@hono/node-server";
import { redis } from "./lib/redis";
import { getTomorrowMidnightUnix } from "./lib/utils";

const app = new Hono();

const REDIS_STORAGE_KEY = "locations";

app.get("/", async (c) => {
  let locationsByType: LocationsByType | null =
    await redis.get<LocationsByType>(REDIS_STORAGE_KEY);

  if (!locationsByType) {
    const { data, error } = await getData({ date: new Date() });

    const locations = data?.diningCourts;
    if (!locations) throw new Error("No locations");

    locationsByType = {
      diningCourts: locations.filter((loc) => loc.category === "Dining Courts"),
      onTheGo: locations.filter((loc) => loc.category === "On-the-GO!"),
      quickBites: locations.filter((loc) => loc.category === "Quick Bites"),
    } satisfies LocationsByType;

    await redis.set(REDIS_STORAGE_KEY, locationsByType, {
      exat: getTomorrowMidnightUnix(),
    });
  }

  return c.json(locationsByType);
});

serve(app);

export default app;
