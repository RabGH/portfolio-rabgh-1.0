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
            className="relative mx-auto flex xl:h-70vh h-90vh
            max-w-[2000px] flex-col items-center 
            justify-center text-center md:text-left xl:flex-row"
        >
            <h3 className="toptitle">Skills</h3>
            <h3
                className="absolute top-20 mt-10 text-sm uppercase tracking-[3px] text-gray-500
              md:text-base"
            >
                Hover over a skill for current proficiency
            </h3>

            <div className="mt-20 grid animate-pulse grid-cols-4 gap-3 md:gap-5 lg:mt-20">
                {skills?.slice(0, skills?.length / 2)?.map((skill) => (
                    <SingleSkill key={skill?._id} skill={skill} />
                ))}

                {skills
                    ?.slice(skills?.length / 2, skills.length)
                    ?.map((skill) => (
                        <SingleSkill
                            key={skill?._id}
                            skill={skill}
                            directionLeft
                        />
                    ))}
            </div>
        </motion.div>
    );
}

export default MultiSkills;
