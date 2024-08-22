import { gql } from "@apollo/client";

const GET_PIZZA_BY_ID = gql`
    query GetPizza($id: ID!) {
        pizza(id: $id) {
            data {
                id
                attributes {
                    title
                    price
                    image {
                        data {
                            attributes {
                                url
                                alternativeText
                            }
                        }
                    }
                    ingredients {
                        data {
                            id
                            attributes {
                                title
                            }
                        }
                    }
                }
            }
        }
    }
`

export default GET_PIZZA_BY_ID