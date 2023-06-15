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
import { GetStaticProps, NextPage } from "next/types";
import { PageInfo, Experience, Skill, Project, Social } from "@lib/types";
import { fetchPageInfo } from "@utils/fetchPageInfo";
import { fetchExperiences } from "@utils/fetchExperiences";
import { fetchSkills } from "@utils/fetchSkills";
import { fetchProjects } from "@utils/fetchProjects";
import { fetchSocials } from "@utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const Home: NextPage<Props> = ({
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
}: Props) => {
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
            <main className="z-0 flex h-full flex-col bg-[rgb(36,36,36)] text-white">
                <div className="container">
                    <Header socials={socials} />
                </div>
                <section id="hero">
                    <Hero pageInfo={pageInfo} />
                </section>

                <section id="about">
                    <About pageInfo={pageInfo} />
                </section>

                <section id="experience">
                    <WorkExperience />
                </section>

                <section id="skills">
                    <Skills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="contact">
                    <ContactMe />
                </section>
            </main>
            <motion.div
                className="z-1000 fixed bottom-5 mx-auto flex w-full justify-center md:bottom-10"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1 }}
            >
                <Navbar />
            </motion.div>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async (context: any) => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            experiences,
            pageInfo,
            skills,
            projects,
            socials,
        },
        revalidate: 60,
    };
};
