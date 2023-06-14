import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="This is the home page of my app"
                />
            </Head>
            <main className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
                <Header />

                <section id="hero" className="snap-start">
                    <Hero />
                </section>

                <section id="about" className="snap-center">
                    <About />
                </section>

                <section id="experience" className="snap-center">
                    <WorkExperience />
                </section>

                <section id="skills" className="snap-center">
                    <Skills />
                </section>

                {/* Projects */}

                {/* Contact Me */}
            </main>
        </>
    );
}
