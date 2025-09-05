export interface QueryResponse {
  diningCourts: DiningCourt[];
}

export interface DiningCourt {
  id: string;
  category: string;
  name: string;
  formalName: string;
  lineLength?: string;
  logoUrl: string;
  bannerUrl: string;
  address: Address;
  latitude: number;
  longitude: number;
  googlePlaceId?: string;
  normalHours: NormalHour[];
  upcomingMeals: UpcomingMeal[];
  dailyMenu: DailyMenu;
  __typename: string;
}

interface Address {
  city: string;
  state: string;
  street: string;
  zip: string;
  __typename: string;
}

interface NormalHour {
  id: string;
  name: string;
  effectiveDate: string;
  days: Day[];
  __typename: string;
}

interface Day {
  dayOfWeek: string;
  meals: Meal[];
  __typename: string;
}

interface Meal {
  endTime: string;
  name: string;
  startTime: string;
  __typename: string;
}

interface UpcomingMeal {
  id: string;
  name: string;
  type: string;
  startTime: string;
  endTime: string;
  __typename: string;
}

interface DailyMenu {
  notes: string;
  meals: Meal2[];
  __typename: string;
}

interface Meal2 {
  endTime?: string;
  startTime?: string;
  notes: any;
  name: string;
  status: string;
  stations: Station[];
  __typename: string;
}

interface Station {
  iconUrl: any;
  id: string;
  name: string;
  notes: any;
  items: Item[];
  __typename: string;
}

interface Item {
  specialName?: string;
  itemMenuId: string;
  hasComponents: boolean;
  item: Item2;
  __typename: string;
}

interface Item2 {
  isFlaggedForCurrentUser: boolean;
  isHiddenForCurrentUser: boolean;
  isNutritionReady: boolean;
  itemId: string;
  name: string;
  traits?: Trait[];
  components?: Component[];
  __typename: string;
}

interface Trait {
  name: string;
  svgIcon: string;
  svgIconWithoutBackground: string;
  __typename: string;
}

interface Component {
  name: string;
  isFlaggedForCurrentUser: boolean;
  isHiddenForCurrentUser: boolean;
  isNutritionReady: boolean;
  itemId: string;
  traits?: Trait2[];
  __typename: string;
}

interface Trait2 {
  name: string;
  svgIcon: string;
  svgIconWithoutBackground: string;
  __typename: string;
}
