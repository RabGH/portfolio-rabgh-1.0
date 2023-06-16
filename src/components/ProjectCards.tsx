import React from "react";
import { Project } from "@lib/types";
import { urlFor } from "@lib/sanity";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";

type Props = {
    project: Project;
};

function ProjectCards({ project }: Props) {
    return (
        <article
            className="mt-20 flex h-[650px] w-[350px] flex-shrink-0 
            snap-center flex-col items-center 
            space-y-0 overflow-hidden overflow-x-scroll rounded-lg 
            bg-[#292929] pb-10 pl-10 pr-10 pt-1 
            transition-opacity duration-200 scrollbar 
            sm:w-[500px] sm:pt-5 md:h-auto 
            md:w-[600px] md:overflow-hidden lg:h-[800px] xl:w-[900px] s:mt-12"
        >
            <div className="overflow-hidden overflow-y-scroll scrollbar">
                <h4 className="text-xl font-semibold">{project?.title}</h4>
                <Image
                    src={
                        project.image &&
                        urlFor(project.image).auto("format").url().toString()
                    }
                    height={720}
                    width={1024}
                    alt={project?.title}
                    className="mx-auto mt-5 hidden h-auto w-full md:block xxs:block xs:mt-0"
                />

                <div className="px-0 md:px-10">
                    <div className="mt-2 flex space-x-2">
                        {project?.technologies?.map((technology) => (
                            <Image
                                className="h-10 w-10 rounded-full xxs:h-8 xxs:w-8"
                                key={technology?._id}
                                src={
                                    technology?.image &&
                                    urlFor(technology?.image)
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
                        ))}
                    </div>
                    <p className="text-center text-base md:text-left s:text-lg">
                        {project?.summary}
                    </p>
                    <div className="flex items-center space-x-5">
                        <a
                            href={project?.linkToBuild}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black transition-opacity duration-300 hover:bg-opacity-80"
                        >
                            <FaGithub className="mr-2 h-5 w-5" />
                            <span className="hidden md:block">View Code</span>
                        </a>
                        <a
                            href={project?.linkToSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black transition-opacity duration-300 hover:bg-opacity-80"
                        >
                            <FaGlobe className="mr-2 h-5 w-5" />
                            <span className="hidden md:block">Visit Site</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCards;
