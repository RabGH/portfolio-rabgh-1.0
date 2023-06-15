import React from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { Experience } from "@lib/types";

type Props = {
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lft relative mx-auto flex h-screen max-w-full flex-col
            items-center justify-evenly overflow-hidden px-10 md:flex-row"
        >
            <h3 className="toptitle">Experience</h3>

            <div
                className="flex w-full snap-x snap-mandatory space-x-5 
                overflow-x-scroll p-10 scrollbar"
            >
                {experiences?.map((experience) => (
                    <ExperienceCards
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default WorkExperience;
