import { gql } from "@apollo/client";
import client from "@/app/apollo-client";

const GET_PIZZA_BY_NID = gql`
    query GetPizza($id: ID!) {
        pizza(id: $id) {
            data {
                id
                attributes {
                    title,
                    price,
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

async function fetchPizza(id) {
    try {
        const { data } = await client.query({
            query: GET_PIZZA_BY_NID,
            variables: { id: id },
        })
        return data.pizza.data
    } catch (error) {
        console.error("Error fetching pizza:", error);
        return [];
    }
}

export default async function Pizza({params}) {
    const pizza = await fetchPizza(params.id)
    const ingredients = pizza.attributes.ingredients.data

    return (
        <>
            <h1>{pizza.attributes.title}</h1>
            <ul>
                {ingredients.map((el) => (
                    <li key={el.id}>{el.attributes.title}</li>
                ))}
            </ul>
        </>
    )
}
