import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.hfs.purdue.edu/menus/v3/GraphQL" }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
});

export async function getData() {
  return await client.query({
    query: gql`
      query getStartLocations {
        diningCourtCategories {
          name
          diningCourts {
            id
            category
            name
            formalName
            lineLength
            logoUrl
            upcomingMeals {
              id
              name
              type
              startTime
              endTime
              __typename
            }
            __typename
          }
          __typename
        }
      }
    `,
  });
}
