import { gql } from "@apollo/client";

const GET_PIZZAS = gql`
    query GetPizzas {
        pizzas {
            data {
                id
                attributes {
                    title,
                    price,
                }
            }
        }
    }
`

export default GET_PIZZAS