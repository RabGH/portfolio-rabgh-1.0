import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { useScrollToHash } from "@/components/hooks/scrollPageHook";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollPosition;
}

export default function Home() {
    useScrollToHash();
    const scrollPosition = useScrollPosition();

    const heroOffsetTop = React.useRef(0);

    React.useEffect(() => {
        const heroElement = document.getElementById("hero");
        if (heroElement) {
            heroOffsetTop.current = heroElement.offsetTop;
        }
    }, []);

    const [opacity, setOpacity] = React.useState(1);

    React.useEffect(() => {
        if (scrollPosition >= heroOffsetTop.current) {
            setOpacity(1);
        } else {
            setOpacity(0);
        }
    }, [scrollPosition]);

    return (
        <>
            <Head>
                <title>Portfolio Site Rabii Ghais</title>
                <meta
                    name="description"
                    content="This is the home page of my app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <main className="z-0 flex h-full snap-y snap-mandatory flex-col bg-[rgb(36,36,36)] text-white">
                <Header />

                <section id="hero" className="h-screen">
                    <Hero />
                </section>

                <section id="about" className="h-screen">
                    <About />
                </section>

                <section id="experience" className="h-screen">
                    <WorkExperience />
                </section>

                <section id="skills" className="h-screen">
                    <Skills />
                </section>

                <section id="projects" className="h-screen">
                    <Projects />
                </section>

                <section id="contact" className="h-screen">
                    <ContactMe />
                </section>
            </main>
            <motion.div
                style={{
                    position: "fixed",
                    right: 120,
                    zIndex: 1000,
                    opacity: opacity,
                }}
                className="bottom-5 flex w-full justify-center"
                initial={{ y: "100%", opacity: opacity }}
                animate={{ y: "0%", opacity: opacity }}
                transition={{ duration: 1 }}
            >
                <Navbar />
            </motion.div>
        </>
    );
}
