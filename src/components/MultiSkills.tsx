import React from "react";
import { motion } from "framer-motion";
import SingleSkill from "./SingleSkill";
import { Skill } from "@lib/types";

type Props = {
    skills: Skill[];
};

function MultiSkills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="relative mx-auto flex h-screen 
            min-h-screen max-w-[2000px] flex-col items-center 
            justify-center text-center md:text-left xl:flex-row 
            xl:space-y-0 xl:px-10"
        >
            <h3 className="toptitle">Skills</h3>
            <h3
                className="absolute top-36 text-sm uppercase tracking-[3px]
              text-gray-500"
            >
                Hover over a skill for currency proficiency
            </h3>

            <div className="flex flex-wrap justify-center gap-5 overflow-hidden">
                {skills?.map((skill) => (
                    <SingleSkill key={skill._id} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
}

export default MultiSkills;
