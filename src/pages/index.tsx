import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
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
                <div className="container">
                    <Header />
                </div>
                <section id="hero" className="snap-start">
                    <Hero />
                </section>

                <section id="about" className="snap-start">
                    <About />
                </section>

                <section id="experience" className="snap-start">
                    <WorkExperience />
                </section>

                <section id="skills" className="snap-start">
                    <Skills />
                </section>

                <section id="projects" className="snap-start">
                    <Projects />
                </section>

                <section
                    id="contact"
                    className="h-screen"
                    style={{ scrollSnapAlign: "center" }}
                >
                    <ContactMe />
                </section>
            </main>
            <motion.div
                style={{
                    position: "fixed",
                    right: 125,
                    zIndex: 1000,
                }}
                className="bottom-5 mx-auto flex w-full justify-center md:bottom-10"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <Navbar />
            </motion.div>
        </>
    );
}
