
import client from "@/config/apollo-client";
import config from "@/config/config";
import GET_PIZZA_BY_ID from "@/query/get-pizza-by-id";
import { gql } from "@apollo/client";

const GET_ALL_PIZZA_IDS = gql`
    query GetAllPizzaIds {
        pizzas {
            data {
                id
            }
        }
    }
`;

async function fetchPizza(id) {
    try {
        const { data } = await client.query({
            query: GET_PIZZA_BY_ID,
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
    const imageUrl = pizza.attributes.image?.data?.attributes?.url
        ? `${config.api}${pizza.attributes.image.data.attributes.url}`
        : ''
    const imageAlt = pizza.attributes.image?.data?.attributes?.alternativeText

    return (
        <>
            <h1>{pizza.attributes.title}</h1>
            {imageUrl ? <img src={imageUrl} alt={imageAlt} /> : ''}
            <ul>
                {ingredients.map((el) => (
                    <li key={el.id}>{el.attributes.title}</li>
                ))}
            </ul>
        </>
    )
}

// Function to generate static paths for all pizza pages
export async function generateStaticParams() {
    const { data } = await client.query({
        query: GET_ALL_PIZZA_IDS,
    });
  
    // Return an array of paths with the dynamic ID for each pizza
    return data.pizzas.data.map((pizza) => ({
        id: pizza.id,
    }));
}
