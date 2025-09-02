import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeOffset: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Guid: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  TimeOnly: { input: any; output: any; }
  Uri: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  countryCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

/** Represents a print list for line card printing. */
export type AssemblyPrintList = Node & PrintList & {
  __typename?: 'AssemblyPrintList';
  creationTime: Scalars['DateTimeOffset']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  modifiedTime: Scalars['DateTimeOffset']['output'];
  /** Primary key of the print list. */
  printListId?: Maybe<Scalars['Guid']['output']>;
  sections?: Maybe<Array<Maybe<PrintAssemblySection>>>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

/** Input type for mutating an assembly print list. */
export type AssemblyPrintListUpdate = {
  id: Scalars['ID']['input'];
  /** New assembly sections, or null to keep the existing sections. */
  sections?: InputMaybe<Array<InputMaybe<PrintListSectionInput>>>;
  /** New subtitle, or null to keep the existing subtitle */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** New title, or null to keep the existing title. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Root for querying data directly from CBORD */
export type Cbord = {
  __typename?: 'Cbord';
  /** Search for an item in CBORD by name */
  items?: Maybe<Array<Maybe<CbordItem>>>;
  /** Gets a single service unit by its CBORD primray key. */
  serviceUnit?: Maybe<ServiceUnit>;
  serviceUnits?: Maybe<Array<Maybe<ServiceUnit>>>;
};


/** Root for querying data directly from CBORD */
export type CbordItemsArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


/** Root for querying data directly from CBORD */
export type CbordServiceUnitArgs = {
  cbordId?: InputMaybe<Scalars['Int']['input']>;
};

/** All of the available information on the item from CBORD. */
export type CbordItem = Node & {
  __typename?: 'CbordItem';
  /** Primary key for this item in the CBORD database */
  cbordItemId: Scalars['Int']['output'];
  /** The common name of the item in CBORD. */
  commonName?: Maybe<Scalars['String']['output']>;
  /** A list of CBORD item ids that are components of this item.  More efficient than the `components` field if all you need is the IDs. */
  componentIds?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  /** A list of component items within this item. */
  components?: Maybe<Array<Maybe<CbordItem>>>;
  /** The date/time this item was first created in CBORD. */
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  /** The date/time the item was last modified in CBORD. */
  dateModified?: Maybe<Scalars['DateTime']['output']>;
  /** The formal name of the item in CBORD.  This is the version intended for public display. */
  formalName?: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** The ingredients this item is made up of */
  ingredients?: Maybe<Scalars['String']['output']>;
  /** A unique string identifying this item */
  keyName?: Maybe<Scalars['String']['output']>;
  /** The name of the item in CBORD. */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of nutrition facts available for this item. */
  nutritionFacts?: Maybe<Array<Maybe<CbordNutritionFact>>>;
  /** A list of traits associated with this item. */
  traits?: Maybe<Array<Maybe<Trait>>>;
};

export type CbordItemAppearance = {
  __typename?: 'CbordItemAppearance';
  /** The primary key of the item in CBORD */
  cbordItemId: Scalars['Int']['output'];
  /** The primary key of the course in the CBORD database (often a Dining Court station) */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Name of the course in CBORD (often a Dining Court station) */
  courseName?: Maybe<Scalars['String']['output']>;
  /** The date this item is served. */
  date: Scalars['DateTime']['output'];
  /** All of the available information on the item from CBORD. */
  detail?: Maybe<CbordItem>;
  /** Name of this item exposed to the public */
  formalName: Scalars['String']['output'];
  /** Name of the item */
  itemName: Scalars['String']['output'];
  /** Unique string identifying this item */
  keyName: Scalars['String']['output'];
  /** The meal this item is served. */
  meal: Scalars['String']['output'];
};

/** Describes a nutrition fact, such as "Total Fat" or "Calories". */
export type CbordNutritionFact = {
  __typename?: 'CbordNutritionFact';
  /** The daily value, e.g. "17%".  Can be null. */
  dailyValueLabel?: Maybe<Scalars['String']['output']>;
  /** Formatted version of the value to be displayed on a label, e.g. "34g".  Can be null. */
  label?: Maybe<Scalars['String']['output']>;
  /** Name of the nutrition fact, e.g. "Calories" */
  name: Scalars['String']['output'];
  /** Numeric value of the nutrition  */
  value?: Maybe<Scalars['Decimal']['output']>;
};

export type ComponentAdministration = {
  __typename?: 'ComponentAdministration';
  isDisplayed: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  item?: Maybe<Item>;
  itemId: Scalars['Guid']['output'];
  specialName?: Maybe<Scalars['String']['output']>;
};

/** Update a parstock component */
export type ComponentInput = {
  isDisplayed: Scalars['Boolean']['input'];
  /** Item ID */
  itemId: Scalars['Guid']['input'];
  specialName?: InputMaybe<Scalars['String']['input']>;
};

/** Gets the items served on a particular day. */
export type DailyMenu = {
  __typename?: 'DailyMenu';
  meals: Array<MealMenu>;
  notes: Scalars['String']['output'];
};

/** Metadata on a deleted node. */
export type DeletedNode = {
  __typename?: 'DeletedNode';
  /** ID of the deleted node. */
  deletedNodeId?: Maybe<Scalars['ID']['output']>;
};

/** Represents a residential dining court. */
export type DiningCourt = Location & Node & {
  __typename?: 'DiningCourt';
  address?: Maybe<Address>;
  adminMenu?: Maybe<MenuConfiguration>;
  bannerUrl?: Maybe<Scalars['Uri']['output']>;
  category: Scalars['String']['output'];
  dailyMenu?: Maybe<DailyMenu>;
  formalName?: Maybe<Scalars['String']['output']>;
  googlePlaceId?: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  isLineLengthCrowdsourcingEnabled: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  lineLength?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['Uri']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  normalHours: Array<DiningCourtNormalHoursPeriod>;
  phone?: Maybe<Scalars['String']['output']>;
  publishStatus: Array<PublishStatus>;
  transactMobileOrderId?: Maybe<Scalars['Int']['output']>;
  upcomingMeals: Array<UpcomingMeal>;
  url?: Maybe<Scalars['Uri']['output']>;
};


/** Represents a residential dining court. */
export type DiningCourtAdminMenuArgs = {
  date: Scalars['Date']['input'];
};


/** Represents a residential dining court. */
export type DiningCourtDailyMenuArgs = {
  date: Scalars['Date']['input'];
};


/** Represents a residential dining court. */
export type DiningCourtPublishStatusArgs = {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
};

export type DiningCourtCategory = {
  __typename?: 'DiningCourtCategory';
  diningCourts: Array<DiningCourt>;
  name: Scalars['String']['output'];
};

export type DiningCourtNormalHoursDay = {
  __typename?: 'DiningCourtNormalHoursDay';
  dayOfWeek: Scalars['String']['output'];
  meals: Array<DiningCourtNormalHoursMeal>;
};

export type DiningCourtNormalHoursMeal = {
  __typename?: 'DiningCourtNormalHoursMeal';
  endTime: Scalars['TimeOnly']['output'];
  name: Scalars['String']['output'];
  startTime: Scalars['TimeOnly']['output'];
};

export type DiningCourtNormalHoursPeriod = {
  __typename?: 'DiningCourtNormalHoursPeriod';
  days: Array<DiningCourtNormalHoursDay>;
  effectiveDate: Scalars['DateTime']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FavoritedItem = Node & {
  __typename?: 'FavoritedItem';
  dateAdded?: Maybe<Scalars['DateTimeOffset']['output']>;
  favoriteId: Scalars['Guid']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  item: Item;
};

/** All of the available information on the item from CBORD. */
export type Item = Node & {
  __typename?: 'Item';
  appearances: Array<ItemOccurrence>;
  /** The components of this item, if any */
  components?: Maybe<Array<Item>>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** The ingredients this item is made up of */
  ingredients?: Maybe<Scalars['String']['output']>;
  isBlacklisted: Scalars['Boolean']['output'];
  isCbordItem: Scalars['Boolean']['output'];
  isDiscontinued: Scalars['Boolean']['output'];
  isFlaggedForCurrentUser: Scalars['Boolean']['output'];
  isHiddenForCurrentUser: Scalars['Boolean']['output'];
  isNutritionReady: Scalars['Boolean']['output'];
  /** The unique identifier of the item, in common with the V2 REST API */
  itemId: Scalars['Guid']['output'];
  /** The name of the item in CBORD. */
  name: Scalars['String']['output'];
  /** A list of nutrition facts available for this item. */
  nutritionFacts?: Maybe<Array<NutritionFact>>;
  /** A list of traits associated with this item. */
  traits?: Maybe<Array<Trait>>;
};

/** Provides information for administering an occurrence of an item on a menu */
export type ItemAdministration = {
  __typename?: 'ItemAdministration';
  components?: Maybe<Array<ComponentAdministration>>;
  isDisplayed: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  item?: Maybe<Item>;
  itemMenuId: Scalars['Guid']['output'];
  specialName?: Maybe<Scalars['String']['output']>;
};

/** Represents an occurrence of a served item. */
export type ItemAppearance = Node & {
  __typename?: 'ItemAppearance';
  /** These are the menued parstock components for one particular date/meal/station. */
  components?: Maybe<Array<ItemAppearance>>;
  displayName: Scalars['String']['output'];
  /** True if this item has sub-components.  Useful if you don't want to fetch component info yet. */
  hasComponents: Scalars['Boolean']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  item: Item;
  /** Unique identifier for this occurrence of an item on a menu. */
  itemMenuId: Scalars['Guid']['output'];
  specialName?: Maybe<Scalars['String']['output']>;
};

/** Update a menued item */
export type ItemInput = {
  /** Parstock item configuration.  If set to null, default parstock behavior will apply. */
  components?: InputMaybe<Array<InputMaybe<ComponentInput>>>;
  isDisplayed: Scalars['Boolean']['input'];
  /** Item ID */
  itemId: Scalars['Guid']['input'];
  /** Item Menu ID */
  itemMenuId?: InputMaybe<Scalars['Guid']['input']>;
  specialName?: InputMaybe<Scalars['String']['input']>;
};

export type ItemOccurrence = {
  __typename?: 'ItemOccurrence';
  date: Scalars['DateTimeOffset']['output'];
  locationName: Scalars['String']['output'];
  mealName: Scalars['String']['output'];
  stationName: Scalars['String']['output'];
};

/** Represents a print list for line card printing. */
export type LineCardPrintList = Node & PrintList & {
  __typename?: 'LineCardPrintList';
  creationTime: Scalars['DateTimeOffset']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<PrintItem>>>;
  modifiedTime: Scalars['DateTimeOffset']['output'];
  /** Primary key of the print list. */
  printListId?: Maybe<Scalars['Guid']['output']>;
  title: Scalars['String']['output'];
};

/** Input type for mutating an line card print list. */
export type LineCardPrintListUpdate = {
  id?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InputMaybe<PrintItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  address?: Maybe<Address>;
  bannerUrl?: Maybe<Scalars['Uri']['output']>;
  category: Scalars['String']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  logoUrl?: Maybe<Scalars['Uri']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  transactMobileOrderId?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Uri']['output']>;
};

export type LocationCategory = {
  __typename?: 'LocationCategory';
  locations: Array<Location>;
  name: Scalars['String']['output'];
};

/** Provides information for meal administration */
export type MealConfiguration = {
  __typename?: 'MealConfiguration';
  endTime?: Maybe<Scalars['TimeOnly']['output']>;
  id: Scalars['Guid']['output'];
  name: Scalars['String']['output'];
  normalEndTime?: Maybe<Scalars['TimeOnly']['output']>;
  normalStartTime?: Maybe<Scalars['TimeOnly']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['TimeOnly']['output']>;
  state: MealState;
  stations: Array<StationConfiguration>;
};

/** Update a daily meal */
export type MealInput = {
  endTime?: InputMaybe<Scalars['TimeOnly']['input']>;
  /** Meal Menu ID */
  id: Scalars['Guid']['input'];
  name: Scalars['String']['input'];
  startTime?: InputMaybe<Scalars['TimeOnly']['input']>;
  state: MealState;
  stations?: InputMaybe<Array<InputMaybe<StationInput>>>;
};

/** Represents a meal, e.g. "Lunch". */
export type MealMenu = Node & {
  __typename?: 'MealMenu';
  endTime?: Maybe<Scalars['DateTimeOffset']['output']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** @deprecated Use name instead */
  meal: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  startTime?: Maybe<Scalars['DateTimeOffset']['output']>;
  stations: Array<Station>;
  status: MealStatus;
  type: MealType;
};

/** Meal state configurable by menu admins (closed/open/hidden) */
export enum MealState {
  /** Closed, no meal will be served, but meal is visible on menu */
  Closed = 'CLOSED',
  /** Not visible on public menu */
  Hidden = 'HIDDEN',
  /** Open for dining */
  Open = 'OPEN'
}

/** Open/closed state of a meal. */
export enum MealStatus {
  /** No meal will be served. */
  Closed = 'CLOSED',
  /** The meal is open. */
  Open = 'OPEN',
  /** The menu is yet to be determined. */
  Unavailable = 'UNAVAILABLE'
}

/** Provides a hint to the type of meal being served. */
export enum MealType {
  /** Breakfast */
  Breakfast = 'BREAKFAST',
  /** Dinner */
  Dinner = 'DINNER',
  /** Lunch */
  Lunch = 'LUNCH',
  /** Snack */
  Snack = 'SNACK',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

/** Provides information for menu administration */
export type MenuConfiguration = {
  __typename?: 'MenuConfiguration';
  id: Scalars['Guid']['output'];
  meals: Array<MealConfiguration>;
  notes?: Maybe<Scalars['String']['output']>;
};

/** Update a daily menu */
export type MenuInput = {
  date: Scalars['Date']['input'];
  locationId: Scalars['String']['input'];
  meals?: InputMaybe<Array<InputMaybe<MealInput>>>;
};

/** Root for modifying data */
export type MenusMutation = {
  __typename?: 'MenusMutation';
  addFavoriteById: Array<FavoritedItem>;
  addFavoriteByItemId: Array<FavoritedItem>;
  /** Creates a new non-CBORD item with a particular name. */
  createNonCbordItem?: Maybe<Item>;
  createPrintList?: Maybe<PrintList>;
  deletePrintList?: Maybe<DeletedNode>;
  editFavorites: Array<FavoritedItem>;
  editFavoritesWithItemIds: Array<FavoritedItem>;
  modifyAssemblyPrintList?: Maybe<AssemblyPrintList>;
  modifyAssemblyPrintSection?: Maybe<PrintAssemblySection>;
  modifyLineCardPrintList?: Maybe<LineCardPrintList>;
  modifyPrintItem?: Maybe<PrintItem>;
  removeFavorite: Array<FavoritedItem>;
  removeFavoriteByFavoriteId: Array<FavoritedItem>;
  setBlacklisted: Item;
  setPublishStatus?: Maybe<MenuConfiguration>;
  updateMenu?: Maybe<MenuConfiguration>;
};


/** Root for modifying data */
export type MenusMutationAddFavoriteByIdArgs = {
  id: Scalars['ID']['input'];
};


/** Root for modifying data */
export type MenusMutationAddFavoriteByItemIdArgs = {
  itemId: Scalars['Guid']['input'];
};


/** Root for modifying data */
export type MenusMutationCreateNonCbordItemArgs = {
  name: Scalars['String']['input'];
};


/** Root for modifying data */
export type MenusMutationCreatePrintListArgs = {
  title: Scalars['String']['input'];
  type: PrintListType;
};


/** Root for modifying data */
export type MenusMutationDeletePrintListArgs = {
  id: Scalars['ID']['input'];
};


/** Root for modifying data */
export type MenusMutationEditFavoritesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


/** Root for modifying data */
export type MenusMutationEditFavoritesWithItemIdsArgs = {
  itemIds: Array<Scalars['Guid']['input']>;
};


/** Root for modifying data */
export type MenusMutationModifyAssemblyPrintListArgs = {
  input: AssemblyPrintListUpdate;
};


/** Root for modifying data */
export type MenusMutationModifyAssemblyPrintSectionArgs = {
  input: PrintListSectionInput;
};


/** Root for modifying data */
export type MenusMutationModifyLineCardPrintListArgs = {
  input: LineCardPrintListUpdate;
};


/** Root for modifying data */
export type MenusMutationModifyPrintItemArgs = {
  input: PrintItemInput;
};


/** Root for modifying data */
export type MenusMutationRemoveFavoriteArgs = {
  id: Scalars['ID']['input'];
};


/** Root for modifying data */
export type MenusMutationRemoveFavoriteByFavoriteIdArgs = {
  favoriteId: Scalars['Guid']['input'];
};


/** Root for modifying data */
export type MenusMutationSetBlacklistedArgs = {
  isBlacklisted: Scalars['Boolean']['input'];
  itemId: Scalars['Guid']['input'];
};


/** Root for modifying data */
export type MenusMutationSetPublishStatusArgs = {
  date: Scalars['Date']['input'];
  isPublished: Scalars['Boolean']['input'];
  locationId: Scalars['String']['input'];
  meals?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Root for modifying data */
export type MenusMutationUpdateMenuArgs = {
  menu: MenuInput;
};

/** Root for querying data */
export type MenusQuery = {
  __typename?: 'MenusQuery';
  /** Root for querying data directly from CBORD */
  cbord?: Maybe<Cbord>;
  currentUser?: Maybe<User>;
  dietaryTraits: Array<Trait>;
  diningCourt?: Maybe<DiningCourt>;
  /** Get the dining court by the Location primary key, e.g. "ERHT" */
  diningCourtByLocationId?: Maybe<DiningCourt>;
  diningCourtByName?: Maybe<DiningCourt>;
  diningCourtCategories: Array<DiningCourtCategory>;
  diningCourts?: Maybe<Array<Maybe<DiningCourt>>>;
  itemAppearance: ItemAppearance;
  itemByItemId: Item;
  itemSearch: Array<Item>;
  locationCategories: Array<LocationCategory>;
  locations?: Maybe<Array<Maybe<Location>>>;
  node?: Maybe<Node>;
  printLists?: Maybe<Array<Maybe<PrintList>>>;
  retailLocation?: Maybe<RetailLocation>;
  retailLocations?: Maybe<Array<Maybe<RetailLocation>>>;
};


/** Root for querying data */
export type MenusQueryDiningCourtArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Root for querying data */
export type MenusQueryDiningCourtByLocationIdArgs = {
  locationId?: InputMaybe<Scalars['String']['input']>;
};


/** Root for querying data */
export type MenusQueryDiningCourtByNameArgs = {
  name: Scalars['String']['input'];
};


/** Root for querying data */
export type MenusQueryItemAppearanceArgs = {
  itemMenuId: Scalars['Guid']['input'];
};


/** Root for querying data */
export type MenusQueryItemByItemIdArgs = {
  itemId: Scalars['Guid']['input'];
};


/** Root for querying data */
export type MenusQueryItemSearchArgs = {
  name: Scalars['String']['input'];
};


/** Root for querying data */
export type MenusQueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** Root for querying data */
export type MenusQueryRetailLocationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

/** Describes a nutrition fact, such as "Total Fat" or "Calories". */
export type NutritionFact = {
  __typename?: 'NutritionFact';
  /** The daily value, e.g. "17%".  Can be null. */
  dailyValueLabel?: Maybe<Scalars['String']['output']>;
  /** Formatted version of the value to be displayed on a label, e.g. "34g".  Can be null. */
  label?: Maybe<Scalars['String']['output']>;
  /** Name of the nutrition fact, e.g. "Calories" */
  name: Scalars['String']['output'];
  /** Numeric value of the nutrition fact */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Represents a section on an assembly print list. */
export type PrintAssemblySection = Node & {
  __typename?: 'PrintAssemblySection';
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<PrintItem>>>;
  name: Scalars['String']['output'];
};

/** Represents an item to be printed on a line card. */
export type PrintItem = Node & {
  __typename?: 'PrintItem';
  cbordItem?: Maybe<CbordItem>;
  /** Unique identifier of the CBORD item, or null if this is not a CBORD item. */
  cbordItemId?: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** The number of line cards to print */
  quantity: Scalars['Int']['output'];
  /** A custom string to override the item name when printing. */
  specialName?: Maybe<Scalars['String']['output']>;
};

/** The number of line cards to print. */
export type PrintItemInput = {
  /** Unique identifier of the CBORD item, or null if this is not a CBORD item. */
  cbordItemId?: InputMaybe<Scalars['Int']['input']>;
  /** ID of the print item, or null to create a new one within the context of a session. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The number of line cards to print. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** A custom string to override the item name when printing. */
  specialName?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a print list for line card printing. */
export type PrintList = {
  creationTime: Scalars['DateTimeOffset']['output'];
  id: Scalars['ID']['output'];
  modifiedTime: Scalars['DateTimeOffset']['output'];
  /** Primary key of the print list. */
  printListId?: Maybe<Scalars['Guid']['output']>;
  title: Scalars['String']['output'];
};

/** Represents a section on an assembly print list. */
export type PrintListSectionInput = {
  /** ID of the section to update, or null to create a new section */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** New items for this section, or null to keep them the same. */
  items?: InputMaybe<Array<InputMaybe<PrintItemInput>>>;
  /** New name for this section, or null to keep the same name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Style of print list. */
export enum PrintListType {
  /** A list for a collection of items */
  Assembly = 'ASSEMBLY',
  AssemblyCard = 'ASSEMBLY_CARD',
  /** A line card */
  LineCard = 'LINE_CARD',
  LineItemCard = 'LINE_ITEM_CARD'
}

export type PublishStatus = {
  __typename?: 'PublishStatus';
  date: Scalars['Date']['output'];
  isAbnormal: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  needsAttention: Scalars['Boolean']['output'];
};

export type RetailLocation = Location & Node & {
  __typename?: 'RetailLocation';
  address?: Maybe<Address>;
  bannerUrl?: Maybe<Scalars['Uri']['output']>;
  category: Scalars['String']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  logoUrl?: Maybe<Scalars['Uri']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  menuUrl?: Maybe<Scalars['Uri']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  transactMobileOrderId?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['Uri']['output']>;
};

/** Represents a dining operation where food is served. */
export type ServiceUnit = Node & {
  __typename?: 'ServiceUnit';
  /** The primary key of this service unit in CBORD. */
  cbordId: Scalars['Int']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** Gets the items served on a particular day. */
  menu?: Maybe<Array<Maybe<CbordItemAppearance>>>;
  /** The name of the CBORD service unit, e.g. "Earhart Dining Court" */
  name: Scalars['String']['output'];
};


/** Represents a dining operation where food is served. */
export type ServiceUnitMenuArgs = {
  date?: InputMaybe<Scalars['Date']['input']>;
};

/** Represents a station at a dining court. */
export type Station = Node & {
  __typename?: 'Station';
  backgroundColor?: Maybe<Scalars['HexColorCode']['output']>;
  foregroundColor?: Maybe<Scalars['HexColorCode']['output']>;
  iconUrl?: Maybe<Scalars['Uri']['output']>;
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  items: Array<ItemAppearance>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
};

/** Provides information for station administration */
export type StationConfiguration = {
  __typename?: 'StationConfiguration';
  id: Scalars['Guid']['output'];
  items: Array<ItemAdministration>;
  normalName: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  specialName?: Maybe<Scalars['String']['output']>;
  stationId: Scalars['Guid']['output'];
};

/** Update a menued meal station */
export type StationInput = {
  /** Station Menu ID */
  id: Scalars['Guid']['input'];
  items?: InputMaybe<Array<InputMaybe<ItemInput>>>;
  specialName?: InputMaybe<Scalars['String']['input']>;
  /** Station ID */
  stationId: Scalars['Guid']['input'];
};

/** Describes a trait associated with a CBORD item, such as "Gluten" or "Vegetarian" */
export type Trait = Node & {
  __typename?: 'Trait';
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  /** Name of the trait. */
  name: Scalars['String']['output'];
  /** A URL to a PNG icon indicating the trait */
  pngIcon?: Maybe<Scalars['Uri']['output']>;
  /** A URL to a SVG icon indicating the trait */
  svgIcon?: Maybe<Scalars['Uri']['output']>;
  /** A URL to an SVG icon without a background indicating the trait */
  svgIconWithoutBackground?: Maybe<Scalars['Uri']['output']>;
  type: Scalars['String']['output'];
};

export type UpcomingMeal = {
  __typename?: 'UpcomingMeal';
  endTime: Scalars['DateTimeOffset']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startTime: Scalars['DateTimeOffset']['output'];
  type: Scalars['String']['output'];
};

export type User = Node & {
  __typename?: 'User';
  commonName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites: Array<FavoritedItem>;
  firstName: Scalars['String']['output'];
  /** The globally unique identifier of the node. */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  printLists?: Maybe<Array<Maybe<PrintList>>>;
  puid: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Location: ( DiningCourt ) | ( RetailLocation );
  Node: ( AssemblyPrintList ) | ( CbordItem ) | ( DiningCourt ) | ( FavoritedItem ) | ( Item ) | ( ItemAppearance ) | ( LineCardPrintList ) | ( MealMenu ) | ( PrintAssemblySection ) | ( PrintItem ) | ( RetailLocation ) | ( ServiceUnit ) | ( Station ) | ( Trait ) | ( Omit<User, 'printLists'> & { printLists?: Maybe<Array<Maybe<_RefType['PrintList']>>> } );
  PrintList: ( AssemblyPrintList ) | ( LineCardPrintList );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  AssemblyPrintList: ResolverTypeWrapper<AssemblyPrintList>;
  AssemblyPrintListUpdate: AssemblyPrintListUpdate;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cbord: ResolverTypeWrapper<Cbord>;
  CbordItem: ResolverTypeWrapper<CbordItem>;
  CbordItemAppearance: ResolverTypeWrapper<CbordItemAppearance>;
  CbordNutritionFact: ResolverTypeWrapper<CbordNutritionFact>;
  ComponentAdministration: ResolverTypeWrapper<ComponentAdministration>;
  ComponentInput: ComponentInput;
  DailyMenu: ResolverTypeWrapper<DailyMenu>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DateTimeOffset: ResolverTypeWrapper<Scalars['DateTimeOffset']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DeletedNode: ResolverTypeWrapper<DeletedNode>;
  DiningCourt: ResolverTypeWrapper<DiningCourt>;
  DiningCourtCategory: ResolverTypeWrapper<DiningCourtCategory>;
  DiningCourtNormalHoursDay: ResolverTypeWrapper<DiningCourtNormalHoursDay>;
  DiningCourtNormalHoursMeal: ResolverTypeWrapper<DiningCourtNormalHoursMeal>;
  DiningCourtNormalHoursPeriod: ResolverTypeWrapper<DiningCourtNormalHoursPeriod>;
  FavoritedItem: ResolverTypeWrapper<FavoritedItem>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Guid: ResolverTypeWrapper<Scalars['Guid']['output']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Item>;
  ItemAdministration: ResolverTypeWrapper<ItemAdministration>;
  ItemAppearance: ResolverTypeWrapper<ItemAppearance>;
  ItemInput: ItemInput;
  ItemOccurrence: ResolverTypeWrapper<ItemOccurrence>;
  LineCardPrintList: ResolverTypeWrapper<LineCardPrintList>;
  LineCardPrintListUpdate: LineCardPrintListUpdate;
  Location: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Location']>;
  LocationCategory: ResolverTypeWrapper<Omit<LocationCategory, 'locations'> & { locations: Array<ResolversTypes['Location']> }>;
  MealConfiguration: ResolverTypeWrapper<MealConfiguration>;
  MealInput: MealInput;
  MealMenu: ResolverTypeWrapper<MealMenu>;
  MealState: MealState;
  MealStatus: MealStatus;
  MealType: MealType;
  MenuConfiguration: ResolverTypeWrapper<MenuConfiguration>;
  MenuInput: MenuInput;
  MenusMutation: ResolverTypeWrapper<{}>;
  MenusQuery: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  NutritionFact: ResolverTypeWrapper<NutritionFact>;
  PrintAssemblySection: ResolverTypeWrapper<PrintAssemblySection>;
  PrintItem: ResolverTypeWrapper<PrintItem>;
  PrintItemInput: PrintItemInput;
  PrintList: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['PrintList']>;
  PrintListSectionInput: PrintListSectionInput;
  PrintListType: PrintListType;
  PublishStatus: ResolverTypeWrapper<PublishStatus>;
  RetailLocation: ResolverTypeWrapper<RetailLocation>;
  ServiceUnit: ResolverTypeWrapper<ServiceUnit>;
  Station: ResolverTypeWrapper<Station>;
  StationConfiguration: ResolverTypeWrapper<StationConfiguration>;
  StationInput: StationInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TimeOnly: ResolverTypeWrapper<Scalars['TimeOnly']['output']>;
  Trait: ResolverTypeWrapper<Trait>;
  UpcomingMeal: ResolverTypeWrapper<UpcomingMeal>;
  Uri: ResolverTypeWrapper<Scalars['Uri']['output']>;
  User: ResolverTypeWrapper<Omit<User, 'printLists'> & { printLists?: Maybe<Array<Maybe<ResolversTypes['PrintList']>>> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AssemblyPrintList: AssemblyPrintList;
  AssemblyPrintListUpdate: AssemblyPrintListUpdate;
  Boolean: Scalars['Boolean']['output'];
  Cbord: Cbord;
  CbordItem: CbordItem;
  CbordItemAppearance: CbordItemAppearance;
  CbordNutritionFact: CbordNutritionFact;
  ComponentAdministration: ComponentAdministration;
  ComponentInput: ComponentInput;
  DailyMenu: DailyMenu;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  DateTimeOffset: Scalars['DateTimeOffset']['output'];
  Decimal: Scalars['Decimal']['output'];
  DeletedNode: DeletedNode;
  DiningCourt: DiningCourt;
  DiningCourtCategory: DiningCourtCategory;
  DiningCourtNormalHoursDay: DiningCourtNormalHoursDay;
  DiningCourtNormalHoursMeal: DiningCourtNormalHoursMeal;
  DiningCourtNormalHoursPeriod: DiningCourtNormalHoursPeriod;
  FavoritedItem: FavoritedItem;
  Float: Scalars['Float']['output'];
  Guid: Scalars['Guid']['output'];
  HexColorCode: Scalars['HexColorCode']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: Item;
  ItemAdministration: ItemAdministration;
  ItemAppearance: ItemAppearance;
  ItemInput: ItemInput;
  ItemOccurrence: ItemOccurrence;
  LineCardPrintList: LineCardPrintList;
  LineCardPrintListUpdate: LineCardPrintListUpdate;
  Location: ResolversInterfaceTypes<ResolversParentTypes>['Location'];
  LocationCategory: Omit<LocationCategory, 'locations'> & { locations: Array<ResolversParentTypes['Location']> };
  MealConfiguration: MealConfiguration;
  MealInput: MealInput;
  MealMenu: MealMenu;
  MenuConfiguration: MenuConfiguration;
  MenuInput: MenuInput;
  MenusMutation: {};
  MenusQuery: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  NutritionFact: NutritionFact;
  PrintAssemblySection: PrintAssemblySection;
  PrintItem: PrintItem;
  PrintItemInput: PrintItemInput;
  PrintList: ResolversInterfaceTypes<ResolversParentTypes>['PrintList'];
  PrintListSectionInput: PrintListSectionInput;
  PublishStatus: PublishStatus;
  RetailLocation: RetailLocation;
  ServiceUnit: ServiceUnit;
  Station: Station;
  StationConfiguration: StationConfiguration;
  StationInput: StationInput;
  String: Scalars['String']['output'];
  TimeOnly: Scalars['TimeOnly']['output'];
  Trait: Trait;
  UpcomingMeal: UpcomingMeal;
  Uri: Scalars['Uri']['output'];
  User: Omit<User, 'printLists'> & { printLists?: Maybe<Array<Maybe<ResolversParentTypes['PrintList']>>> };
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssemblyPrintListResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssemblyPrintList'] = ResolversParentTypes['AssemblyPrintList']> = {
  creationTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  printListId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  sections?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrintAssemblySection']>>>, ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbordResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cbord'] = ResolversParentTypes['Cbord']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbordItem']>>>, ParentType, ContextType, RequireFields<CbordItemsArgs, 'skip' | 'take'>>;
  serviceUnit?: Resolver<Maybe<ResolversTypes['ServiceUnit']>, ParentType, ContextType, Partial<CbordServiceUnitArgs>>;
  serviceUnits?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceUnit']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbordItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CbordItem'] = ResolversParentTypes['CbordItem']> = {
  cbordItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commonName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  componentIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  components?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbordItem']>>>, ParentType, ContextType>;
  dateCreated?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  dateModified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  formalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nutritionFacts?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbordNutritionFact']>>>, ParentType, ContextType>;
  traits?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trait']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbordItemAppearanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['CbordItemAppearance'] = ResolversParentTypes['CbordItemAppearance']> = {
  cbordItemId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  courseId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  courseName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  detail?: Resolver<Maybe<ResolversTypes['CbordItem']>, ParentType, ContextType>;
  formalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  itemName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  keyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CbordNutritionFactResolvers<ContextType = any, ParentType extends ResolversParentTypes['CbordNutritionFact'] = ResolversParentTypes['CbordNutritionFact']> = {
  dailyValueLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentAdministrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ComponentAdministration'] = ResolversParentTypes['ComponentAdministration']> = {
  isDisplayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  specialName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyMenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyMenu'] = ResolversParentTypes['DailyMenu']> = {
  meals?: Resolver<Array<ResolversTypes['MealMenu']>, ParentType, ContextType>;
  notes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DateTimeOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTimeOffset'], any> {
  name: 'DateTimeOffset';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DeletedNodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletedNode'] = ResolversParentTypes['DeletedNode']> = {
  deletedNodeId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiningCourtResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiningCourt'] = ResolversParentTypes['DiningCourt']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  adminMenu?: Resolver<Maybe<ResolversTypes['MenuConfiguration']>, ParentType, ContextType, RequireFields<DiningCourtAdminMenuArgs, 'date'>>;
  bannerUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dailyMenu?: Resolver<Maybe<ResolversTypes['DailyMenu']>, ParentType, ContextType, RequireFields<DiningCourtDailyMenuArgs, 'date'>>;
  formalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googlePlaceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLineLengthCrowdsourcingEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lineLength?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalHours?: Resolver<Array<ResolversTypes['DiningCourtNormalHoursPeriod']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishStatus?: Resolver<Array<ResolversTypes['PublishStatus']>, ParentType, ContextType, RequireFields<DiningCourtPublishStatusArgs, 'endDate' | 'startDate'>>;
  transactMobileOrderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  upcomingMeals?: Resolver<Array<ResolversTypes['UpcomingMeal']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiningCourtCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiningCourtCategory'] = ResolversParentTypes['DiningCourtCategory']> = {
  diningCourts?: Resolver<Array<ResolversTypes['DiningCourt']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiningCourtNormalHoursDayResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiningCourtNormalHoursDay'] = ResolversParentTypes['DiningCourtNormalHoursDay']> = {
  dayOfWeek?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meals?: Resolver<Array<ResolversTypes['DiningCourtNormalHoursMeal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiningCourtNormalHoursMealResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiningCourtNormalHoursMeal'] = ResolversParentTypes['DiningCourtNormalHoursMeal']> = {
  endTime?: Resolver<ResolversTypes['TimeOnly'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['TimeOnly'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiningCourtNormalHoursPeriodResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiningCourtNormalHoursPeriod'] = ResolversParentTypes['DiningCourtNormalHoursPeriod']> = {
  days?: Resolver<Array<ResolversTypes['DiningCourtNormalHoursDay']>, ParentType, ContextType>;
  effectiveDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavoritedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['FavoritedItem'] = ResolversParentTypes['FavoritedItem']> = {
  dateAdded?: Resolver<Maybe<ResolversTypes['DateTimeOffset']>, ParentType, ContextType>;
  favoriteId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Guid'], any> {
  name: 'Guid';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  appearances?: Resolver<Array<ResolversTypes['ItemOccurrence']>, ParentType, ContextType>;
  components?: Resolver<Maybe<Array<ResolversTypes['Item']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ingredients?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isBlacklisted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCbordItem?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDiscontinued?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFlaggedForCurrentUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isHiddenForCurrentUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isNutritionReady?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nutritionFacts?: Resolver<Maybe<Array<ResolversTypes['NutritionFact']>>, ParentType, ContextType>;
  traits?: Resolver<Maybe<Array<ResolversTypes['Trait']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemAdministrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemAdministration'] = ResolversParentTypes['ItemAdministration']> = {
  components?: Resolver<Maybe<Array<ResolversTypes['ComponentAdministration']>>, ParentType, ContextType>;
  isDisplayed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  itemMenuId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  specialName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemAppearanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemAppearance'] = ResolversParentTypes['ItemAppearance']> = {
  components?: Resolver<Maybe<Array<ResolversTypes['ItemAppearance']>>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasComponents?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  itemMenuId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  specialName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemOccurrenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemOccurrence'] = ResolversParentTypes['ItemOccurrence']> = {
  date?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  locationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mealName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineCardPrintListResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineCardPrintList'] = ResolversParentTypes['LineCardPrintList']> = {
  creationTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrintItem']>>>, ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  printListId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  __resolveType: TypeResolveFn<'DiningCourt' | 'RetailLocation', ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  bannerUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactMobileOrderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
};

export type LocationCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocationCategory'] = ResolversParentTypes['LocationCategory']> = {
  locations?: Resolver<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MealConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MealConfiguration'] = ResolversParentTypes['MealConfiguration']> = {
  endTime?: Resolver<Maybe<ResolversTypes['TimeOnly']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalEndTime?: Resolver<Maybe<ResolversTypes['TimeOnly']>, ParentType, ContextType>;
  normalStartTime?: Resolver<Maybe<ResolversTypes['TimeOnly']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['TimeOnly']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['MealState'], ParentType, ContextType>;
  stations?: Resolver<Array<ResolversTypes['StationConfiguration']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MealMenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['MealMenu'] = ResolversParentTypes['MealMenu']> = {
  endTime?: Resolver<Maybe<ResolversTypes['DateTimeOffset']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  meal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['DateTimeOffset']>, ParentType, ContextType>;
  stations?: Resolver<Array<ResolversTypes['Station']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MealStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MealType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuConfiguration'] = ResolversParentTypes['MenuConfiguration']> = {
  id?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  meals?: Resolver<Array<ResolversTypes['MealConfiguration']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenusMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenusMutation'] = ResolversParentTypes['MenusMutation']> = {
  addFavoriteById?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationAddFavoriteByIdArgs, 'id'>>;
  addFavoriteByItemId?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationAddFavoriteByItemIdArgs, 'itemId'>>;
  createNonCbordItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MenusMutationCreateNonCbordItemArgs, 'name'>>;
  createPrintList?: Resolver<Maybe<ResolversTypes['PrintList']>, ParentType, ContextType, RequireFields<MenusMutationCreatePrintListArgs, 'title' | 'type'>>;
  deletePrintList?: Resolver<Maybe<ResolversTypes['DeletedNode']>, ParentType, ContextType, RequireFields<MenusMutationDeletePrintListArgs, 'id'>>;
  editFavorites?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationEditFavoritesArgs, 'ids'>>;
  editFavoritesWithItemIds?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationEditFavoritesWithItemIdsArgs, 'itemIds'>>;
  modifyAssemblyPrintList?: Resolver<Maybe<ResolversTypes['AssemblyPrintList']>, ParentType, ContextType, RequireFields<MenusMutationModifyAssemblyPrintListArgs, 'input'>>;
  modifyAssemblyPrintSection?: Resolver<Maybe<ResolversTypes['PrintAssemblySection']>, ParentType, ContextType, RequireFields<MenusMutationModifyAssemblyPrintSectionArgs, 'input'>>;
  modifyLineCardPrintList?: Resolver<Maybe<ResolversTypes['LineCardPrintList']>, ParentType, ContextType, RequireFields<MenusMutationModifyLineCardPrintListArgs, 'input'>>;
  modifyPrintItem?: Resolver<Maybe<ResolversTypes['PrintItem']>, ParentType, ContextType, RequireFields<MenusMutationModifyPrintItemArgs, 'input'>>;
  removeFavorite?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationRemoveFavoriteArgs, 'id'>>;
  removeFavoriteByFavoriteId?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType, RequireFields<MenusMutationRemoveFavoriteByFavoriteIdArgs, 'favoriteId'>>;
  setBlacklisted?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<MenusMutationSetBlacklistedArgs, 'isBlacklisted' | 'itemId'>>;
  setPublishStatus?: Resolver<Maybe<ResolversTypes['MenuConfiguration']>, ParentType, ContextType, RequireFields<MenusMutationSetPublishStatusArgs, 'date' | 'isPublished' | 'locationId'>>;
  updateMenu?: Resolver<Maybe<ResolversTypes['MenuConfiguration']>, ParentType, ContextType, RequireFields<MenusMutationUpdateMenuArgs, 'menu'>>;
};

export type MenusQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenusQuery'] = ResolversParentTypes['MenusQuery']> = {
  cbord?: Resolver<Maybe<ResolversTypes['Cbord']>, ParentType, ContextType>;
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  dietaryTraits?: Resolver<Array<ResolversTypes['Trait']>, ParentType, ContextType>;
  diningCourt?: Resolver<Maybe<ResolversTypes['DiningCourt']>, ParentType, ContextType, Partial<MenusQueryDiningCourtArgs>>;
  diningCourtByLocationId?: Resolver<Maybe<ResolversTypes['DiningCourt']>, ParentType, ContextType, Partial<MenusQueryDiningCourtByLocationIdArgs>>;
  diningCourtByName?: Resolver<Maybe<ResolversTypes['DiningCourt']>, ParentType, ContextType, RequireFields<MenusQueryDiningCourtByNameArgs, 'name'>>;
  diningCourtCategories?: Resolver<Array<ResolversTypes['DiningCourtCategory']>, ParentType, ContextType>;
  diningCourts?: Resolver<Maybe<Array<Maybe<ResolversTypes['DiningCourt']>>>, ParentType, ContextType>;
  itemAppearance?: Resolver<ResolversTypes['ItemAppearance'], ParentType, ContextType, RequireFields<MenusQueryItemAppearanceArgs, 'itemMenuId'>>;
  itemByItemId?: Resolver<ResolversTypes['Item'], ParentType, ContextType, RequireFields<MenusQueryItemByItemIdArgs, 'itemId'>>;
  itemSearch?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MenusQueryItemSearchArgs, 'name'>>;
  locationCategories?: Resolver<Array<ResolversTypes['LocationCategory']>, ParentType, ContextType>;
  locations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Location']>>>, ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<MenusQueryNodeArgs, 'id'>>;
  printLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrintList']>>>, ParentType, ContextType>;
  retailLocation?: Resolver<Maybe<ResolversTypes['RetailLocation']>, ParentType, ContextType, Partial<MenusQueryRetailLocationArgs>>;
  retailLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RetailLocation']>>>, ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'AssemblyPrintList' | 'CbordItem' | 'DiningCourt' | 'FavoritedItem' | 'Item' | 'ItemAppearance' | 'LineCardPrintList' | 'MealMenu' | 'PrintAssemblySection' | 'PrintItem' | 'RetailLocation' | 'ServiceUnit' | 'Station' | 'Trait' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type NutritionFactResolvers<ContextType = any, ParentType extends ResolversParentTypes['NutritionFact'] = ResolversParentTypes['NutritionFact']> = {
  dailyValueLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrintAssemblySectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrintAssemblySection'] = ResolversParentTypes['PrintAssemblySection']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrintItem']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrintItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrintItem'] = ResolversParentTypes['PrintItem']> = {
  cbordItem?: Resolver<Maybe<ResolversTypes['CbordItem']>, ParentType, ContextType>;
  cbordItemId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  specialName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrintListResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrintList'] = ResolversParentTypes['PrintList']> = {
  __resolveType: TypeResolveFn<'AssemblyPrintList' | 'LineCardPrintList', ParentType, ContextType>;
  creationTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  modifiedTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  printListId?: Resolver<Maybe<ResolversTypes['Guid']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type PublishStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublishStatus'] = ResolversParentTypes['PublishStatus']> = {
  date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  isAbnormal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOpen?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  needsAttention?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RetailLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['RetailLocation'] = ResolversParentTypes['RetailLocation']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  bannerUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  logoUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  menuUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactMobileOrderId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServiceUnit'] = ResolversParentTypes['ServiceUnit']> = {
  cbordId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  menu?: Resolver<Maybe<Array<Maybe<ResolversTypes['CbordItemAppearance']>>>, ParentType, ContextType, Partial<ServiceUnitMenuArgs>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Station'] = ResolversParentTypes['Station']> = {
  backgroundColor?: Resolver<Maybe<ResolversTypes['HexColorCode']>, ParentType, ContextType>;
  foregroundColor?: Resolver<Maybe<ResolversTypes['HexColorCode']>, ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['ItemAppearance']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationConfigurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['StationConfiguration'] = ResolversParentTypes['StationConfiguration']> = {
  id?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['ItemAdministration']>, ParentType, ContextType>;
  normalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  specialName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationId?: Resolver<ResolversTypes['Guid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeOnlyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeOnly'], any> {
  name: 'TimeOnly';
}

export type TraitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trait'] = ResolversParentTypes['Trait']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pngIcon?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  svgIcon?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  svgIconWithoutBackground?: Resolver<Maybe<ResolversTypes['Uri']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpcomingMealResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpcomingMeal'] = ResolversParentTypes['UpcomingMeal']> = {
  endTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes['DateTimeOffset'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Uri'], any> {
  name: 'Uri';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  commonName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favorites?: Resolver<Array<ResolversTypes['FavoritedItem']>, ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  printLists?: Resolver<Maybe<Array<Maybe<ResolversTypes['PrintList']>>>, ParentType, ContextType>;
  puid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  AssemblyPrintList?: AssemblyPrintListResolvers<ContextType>;
  Cbord?: CbordResolvers<ContextType>;
  CbordItem?: CbordItemResolvers<ContextType>;
  CbordItemAppearance?: CbordItemAppearanceResolvers<ContextType>;
  CbordNutritionFact?: CbordNutritionFactResolvers<ContextType>;
  ComponentAdministration?: ComponentAdministrationResolvers<ContextType>;
  DailyMenu?: DailyMenuResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DateTimeOffset?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DeletedNode?: DeletedNodeResolvers<ContextType>;
  DiningCourt?: DiningCourtResolvers<ContextType>;
  DiningCourtCategory?: DiningCourtCategoryResolvers<ContextType>;
  DiningCourtNormalHoursDay?: DiningCourtNormalHoursDayResolvers<ContextType>;
  DiningCourtNormalHoursMeal?: DiningCourtNormalHoursMealResolvers<ContextType>;
  DiningCourtNormalHoursPeriod?: DiningCourtNormalHoursPeriodResolvers<ContextType>;
  FavoritedItem?: FavoritedItemResolvers<ContextType>;
  Guid?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemAdministration?: ItemAdministrationResolvers<ContextType>;
  ItemAppearance?: ItemAppearanceResolvers<ContextType>;
  ItemOccurrence?: ItemOccurrenceResolvers<ContextType>;
  LineCardPrintList?: LineCardPrintListResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  LocationCategory?: LocationCategoryResolvers<ContextType>;
  MealConfiguration?: MealConfigurationResolvers<ContextType>;
  MealMenu?: MealMenuResolvers<ContextType>;
  MenuConfiguration?: MenuConfigurationResolvers<ContextType>;
  MenusMutation?: MenusMutationResolvers<ContextType>;
  MenusQuery?: MenusQueryResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NutritionFact?: NutritionFactResolvers<ContextType>;
  PrintAssemblySection?: PrintAssemblySectionResolvers<ContextType>;
  PrintItem?: PrintItemResolvers<ContextType>;
  PrintList?: PrintListResolvers<ContextType>;
  PublishStatus?: PublishStatusResolvers<ContextType>;
  RetailLocation?: RetailLocationResolvers<ContextType>;
  ServiceUnit?: ServiceUnitResolvers<ContextType>;
  Station?: StationResolvers<ContextType>;
  StationConfiguration?: StationConfigurationResolvers<ContextType>;
  TimeOnly?: GraphQLScalarType;
  Trait?: TraitResolvers<ContextType>;
  UpcomingMeal?: UpcomingMealResolvers<ContextType>;
  Uri?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

