import Link from "next/link";
import Carousel from "@/components/carousel";
import Head from "next/head";
import styles from "@/styles/CarouselPage.module.css"

export default function CarouselPage() {
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
                    Carousel Page
                </div>
                <Carousel />
            </div>
        </>
    )
}