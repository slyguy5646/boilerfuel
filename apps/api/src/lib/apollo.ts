import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { pad } from "./utils";
import { QueryResponse } from "@boilerfuel/types";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.hfs.purdue.edu/menus/v3/GraphQL" }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export async function getData({ date }: { date: Date }) {
  const dateToQuery = new Date();
  return await client.query<
    QueryResponse,
    { date: `${string}-${string}-${string}` }
  >({
    variables: {
      date: `${dateToQuery.getFullYear()}-${pad(dateToQuery.getMonth() + 1)}-${pad(dateToQuery.getDate())}`,
    },
    query: gql`
      query getStartLocations($date: Date!) {
        diningCourts {
          id
          category
          name
          formalName
          lineLength
          logoUrl
          bannerUrl
          address {
            city
            state
            street
            zip
          }

          latitude
          longitude
          googlePlaceId
          normalHours {
            id
            name
            effectiveDate
            days {
              dayOfWeek
              meals {
                endTime
                name
                startTime
              }
            }
          }
          upcomingMeals {
            id
            name
            type
            startTime
            endTime
          }
          dailyMenu(date: $date) {
            notes
            meals {
              endTime
              startTime
              notes
              name
              status
              stations {
                iconUrl
                id
                name
                notes
                items {
                  specialName
                  itemMenuId
                  hasComponents
                  item {
                    isFlaggedForCurrentUser
                    isHiddenForCurrentUser
                    isNutritionReady
                    itemId
                    name
                    traits {
                      name
                      svgIcon
                      svgIconWithoutBackground
                      __typename
                    }
                    components {
                      name
                      isFlaggedForCurrentUser
                      isHiddenForCurrentUser
                      isNutritionReady
                      itemId
                      traits {
                        name
                        svgIcon
                        svgIconWithoutBackground
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
}
