import Link from "next/link"
import { useState, useEffect } from "react"
import Head from "next/head"
import styles from '@/styles/UseEffectTwo.module.css'

export default function UseEffectTwo() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(number)
        setNumber(number + 50)
    }, [])

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
                    useEffectTwo
                </div>
                <div className={styles.value}>
                    {number}
                </div>
            </div>

        </>
    )
}