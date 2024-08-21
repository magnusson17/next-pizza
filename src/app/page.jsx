import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link href='/pizzas'>Pizzas</Link></li>
          </ul>
        </nav>
      </header>
      HELLO
    </>
  );
}
