import Image from "next/image"
import Head from "next/head"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Rabii Ghaith Portfolio Website</title>
                <meta name="description" content="Rabii Ghaith Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/* Hero */}
            <section id="hero">
                <Hero />
            </section>

            {/* About */}

            {/* Experiences */}

            {/* Skills */}

            {/* Projects */}

            {/* Contact Me */}
        </div>
    )
}
