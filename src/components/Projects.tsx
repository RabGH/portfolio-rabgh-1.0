import React from "react";
import { motion } from "framer-motion";
import { Project } from "@lib/types";
import { urlFor } from "@lib/sanity";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Image from "next/image";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative z-0 mx-auto flex h-screen 
            max-w-full flex-col items-center justify-evenly 
            overflow-hidden text-left scrollbar"
        >
            <h3 className="toptitle">Projects</h3>
            <div
                className="relative z-20 flex w-full 
            snap-x snap-mandatory overflow-y-hidden overflow-x-scroll px-5 scrollbar xs:mt-0"
            >
                <div className="flex w-full flex-row space-x-5">
                    {projects.map((project, i) => (
                        <div
                            key={project._id}
                            className="xxl:w-4/5 w-screen flex-shrink-0 snap-center 
                    flex-col items-center justify-center space-y-5 p-10 lg:mt-0"
                        >
                            <div className="max-w-xxl mt-[63px] w-full rounded-lg bg-[rgb(36,36,36)]/70 p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl md:mt-20 xl:max-w-xl">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-xl font-semibold">
                                        {project?.title}
                                    </h4>
                                    <span className="text-sm text-gray-500">
                                        Case Study {i + 1} of {projects?.length}
                                    </span>
                                </div>
                                <div className="mt-5">
                                    <motion.img
                                        initial={{ y: -300, opacity: 0 }}
                                        transition={{ duration: 1.2 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        src={
                                            project.image &&
                                            urlFor(project.image)
                                                .auto("format")
                                                .url()
                                                .toString()
                                        }
                                        alt={project?.title}
                                        className="mx-auto mt-5 hidden h-[140px] w-[220px] md:block md:h-[300px] md:w-[600px] xs:mt-0 xs:block"
                                    />
                                    <p className="text-center text-base md:text-left s:text-lg">
                                        {project?.summary}
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-col items-center justify-between space-y-2 md:space-y-4">
                                    <div className="flex items-center space-x-2">
                                        {project?.technologies.map(
                                            (technology) => (
                                                <Image
                                                    className="h-10 w-10 rounded-full xxs:h-8 xxs:w-8"
                                                    key={technology?._id}
                                                    src={
                                                        technology.image &&
                                                        urlFor(technology.image)
                                                            .auto("format")
                                                            .url()
                                                            .toString()
                                                    }
                                                    alt={technology?.title}
                                                    width={100}
                                                    height={100}
                                                    placeholder="blur"
                                                    blurDataURL="data:image/svg+xml;base64,..."
                                                />
                                            )
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <a
                                            href={project?.linkToBuild}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black transition-opacity duration-300 hover:bg-opacity-80"
                                        >
                                            <FaGithub className="mr-2 h-5 w-5" />
                                            <span className="hidden md:block">
                                                View Code
                                            </span>
                                        </a>
                                        <a
                                            href={project?.linkToSite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black transition-opacity duration-300 hover:bg-opacity-80"
                                        >
                                            <FaGlobe className="mr-2 h-5 w-5" />
                                            <span className="hidden md:block">
                                                Visit Site
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="absolute left-0 top-[30%] h-[500px] 
            w-full -skew-y-12 bg-[#F7AB0A]/10"
            />
        </motion.div>
    );
}

export default Projects;
