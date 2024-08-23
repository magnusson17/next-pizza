"use client"

import { useRef } from "react"

export default function Contacts() {
    const numRef = useRef(0)
    return (
        <>
            <button onClick={() => { numRef.current = Math.random() }}>Cambia colore</button>
        </>
    )
}