import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "@/styles/UseEffectThree.module.css"

export default function UseEffectThree() {

    const [number, setNumber] = useState(0)
    const [value, setValue] = useState(-10)

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
            </Head>
            <Link href='/'>Home</Link>
            <div className={styles.container}>
                <div className={styles.header}>
                    useEffectThree
                </div>
                <div>
                    <button className={styles.button} onClick={() => setNumber(number + 1)}>Click me</button>
                </div>
                <div className={styles.value}>
                    {value}
                </div>
            </div>
        </>
    )
}