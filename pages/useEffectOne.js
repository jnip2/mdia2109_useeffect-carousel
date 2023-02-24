import Link from "next/link"
import Head from "next/head"
import { useEffect, useState } from "react"
import styles from '@/styles/UseEffectOne.module.css'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(number)
        setNumber(number + 1)
    })

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
                    useEffectOne
                </div>
                <div className={styles.value}>
                    {number}
                </div>
            </div>
        </>
    )
}