import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href='/pizzas'>Pizzas</Link></li>
                </ul>
            </nav>
        </header>
    )
}