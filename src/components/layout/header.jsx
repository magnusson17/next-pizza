import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/pizzas'>Pizzas</Link></li>
                    <li><Link href='/signup'>SignUp</Link></li>
                    <li><Link href='/signin'>SignIn</Link></li>
                </ul>
            </nav>
        </header>
    )
}