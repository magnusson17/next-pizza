import Link from "next/link";
import client from "@/config/apollo-client";
import GET_PIZZAS from "@/query/get-pizzas";

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
        <div className="page page-pizzas">
            <h1 className="page-pizzas__title title">PIZZAS</h1>
            <ul>{pizzas.map(pizza =>
                <li key={pizza.id}><Link href={`/pizzas/${pizza.id}`}>{pizza.attributes.title}</Link></li>
            )}</ul>
        </div>
    )
}