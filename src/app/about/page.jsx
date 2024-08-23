import { unstable_noStore } from "next/cache"

export default function About() {
    unstable_noStore()

    return (
        <>
            <h1>About</h1>
            <p>This is a random number {Math.random()}</p>
        </>
    )
}