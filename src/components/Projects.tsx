import React from "react";
import { motion } from "framer-motion";
import { Project } from "@lib/types";
import ProjectCards from "./ProjectCards";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="screenLayoutExpProj"
        >
            <h3 className="toptitle">Projects</h3>
            <div
                className="flex w-full snap-x snap-mandatory space-x-5 
                overflow-x-scroll p-10 scrollbar"
            >
                {projects?.map((project) => (
                    <ProjectCards key={project._id} project={project} />
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;
