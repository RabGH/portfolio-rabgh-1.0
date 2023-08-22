import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "@lib/types";
import ProjectCards from "./ProjectCards";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="screenLayoutExpProj"
        >
            <h3 className="toptitle">Projects</h3>

            <div
                className="flex w-full snap-x snap-mandatory 
                overflow-x-scroll scrollbar"
            >
                <button className="" onClick={scrollLeft}>
                    <FiChevronLeft className="animate-pulse" />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar"
                >
                    {projects?.map((project) => (
                        <ProjectCards key={project._id} project={project} />
                    ))}
                </div>
                <button className="" onClick={scrollRight}>
                    <FiChevronRight className="animate-pulse" />
                </button>
            </div>
        </motion.div>
    );
}

export default Projects;
