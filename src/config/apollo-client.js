import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient ({
    link: createHttpLink({ uri: `${process.env.API_URL}/graphql` }),
    cache: new InMemoryCache()
})

export default client
