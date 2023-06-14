import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-7xl 
            flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="toptitle">About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:h-65 h-66 -mb-20 hidden w-56 
                flex-shrink-0 rounded-full object-cover
                md:mb-0 md:block md:w-64 md:rounded-lg xl:h-[500px] xl:w-[300px]"
                src="/images/candidImage2.jpg"
                alt="Rabii Ghais"
            />
            <div className="space-y-10 px-0 md:px-20">
                <h4 className="text-2xl font-semibold sm:mt-20 md:mt-10 md:block md:text-3xl xl:mt-10">
                    A{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-sm">
                    Hello, my name is Rabii Ghaith and I&apos;m a full-stack web
                    developer with a passion for creating modern and responsive
                    websites and applications. I have experience working with
                    various technologies and languages, such as Next.js, React,
                    TailwindCSS, HTML, and TypeScript for the front-end, and
                    Sanity.io, a headless CMS, and Prisma MySQL for more
                    in-depth data management for the back-end. I also use
                    Material UI and other styled component libraries to create
                    beautiful and consistent UI elements. I started my coding
                    journey with Python projects and have since developed a keen
                    interest in web development and design. I have worked on
                    multiple sites using different libraries and frameworks to
                    create dynamic and user-friendly interfaces. I enjoy
                    learning new skills and tools to enhance my craft and
                    deliver high-quality solutions for any type of website.{" "}
                </p>
            </div>
        </motion.div>
    );
}

export default About;
