import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "./env";

export const apolloClient = new ApolloClient({
  uri: env.uri,
  cache: new InMemoryCache(),
})
