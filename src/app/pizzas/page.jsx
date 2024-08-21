import { gql } from "@apollo/client";
import Link from "next/link";
import client from "../apollo-client";

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
`;

async function fetchPizzas() {
    try {
        const { data } = await client.query({
            query: GET_PIZZAS,
        });
        return data.pizzas.data;
    } catch (error) {
        console.error("Error fetching pizzas:", error);
        return [];
    }
}

export default async function Pizzas() {
    const pizzas = await fetchPizzas();

    return (
        <>
            <h1>PIZZAS</h1>
            <ul>{pizzas.map(pizza =>
                <li key={pizza.attributes.id}><Link href={`/pizzas/${pizza.id}`}>{pizza.attributes.title}</Link></li>
            )}</ul>
        </>
    )
}