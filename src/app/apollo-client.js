import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient ({
    link: createHttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache()
})

export default client
