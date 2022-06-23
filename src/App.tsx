import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { apolloClient } from "./lib/apollo";
import { Router } from "./Router";

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}
