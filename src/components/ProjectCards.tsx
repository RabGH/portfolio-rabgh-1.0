import React from "react";
import { Project } from "@lib/types";
import { urlFor } from "@lib/sanity";
import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Button } from "@mui/material";

type Props = {
    project: Project;
};

function ProjectCards({ project }: Props) {
    return (
        <article
            className="mt-12 flex h-[600px] w-[350px] flex-shrink-0 snap-center 
            flex-col items-center space-y-0 overflow-hidden 
            overflow-x-scroll rounded-lg bg-[#292929] 
            pb-10 pl-10 pr-10 pt-1 transition-opacity 
            duration-200 scrollbar sm:w-[500px] 
            sm:pt-5 md:h-auto md:w-[500px] 
            md:overflow-hidden lg:h-[730px] xl:w-[800px] s:mt-5 s:space-y-2"
        >
            <h4 className="text-xl font-semibold">{project?.title}</h4>
            <div className="overflow-hidden overflow-y-scroll scrollbar">
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

                <div className="space-y-2 px-0 md:px-10">
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

                    <p className="text-center text-sm md:text-left s:text-lg">
                        {project?.summary}
                    </p>
                    <div className="md:justify-left flex flex-row items-center justify-center space-x-5">
                        <Button
                            sx={{
                                color: "black",
                                backgroundColor: "#F7AB0A",
                                "&:hover": {
                                    backgroundColor: "#F7F7F7",
                                },
                            }}
                            variant="contained"
                            href={project?.linkToBuild}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black"
                        >
                            <FaGithub className="mr-2 h-5 w-5" />
                            <span className="hidden md:block">View Code</span>
                        </Button>
                        <Button
                            sx={{
                                color: "black",
                                backgroundColor: "#F7AB0A",
                                "&:hover": {
                                    backgroundColor: "#F7F7F7",
                                },
                            }}
                            variant="contained"
                            href={project?.linkToSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center justify-center rounded-lg bg-[#F7AB0A] px-3 py-2 text-black"
                        >
                            <FaGlobe className="mr-2 h-5 w-5" />
                            <span className="hidden md:block">Visit Site</span>
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCards;
