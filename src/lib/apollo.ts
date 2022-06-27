import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "./env";

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_API_URI,
  headers: {
    'Authentication': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache(),
})
