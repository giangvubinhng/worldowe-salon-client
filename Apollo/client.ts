import { ApolloClient, InMemoryCache } from "@apollo/client";

// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:5000/api/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

export default client;
