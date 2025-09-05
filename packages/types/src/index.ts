import { DiningCourt } from "./request";

export * from "./request";

export interface LocationsByType {
  diningCourts: DiningCourt[];
  onTheGo: DiningCourt[];
  quickBites: DiningCourt[];
}
