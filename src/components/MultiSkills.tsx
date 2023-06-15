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
            xl:space-y-20 xl:px-10"
        >
            <h3 className="toptitle">Skills</h3>
            <h3
                className="absolute top-20 mt-20 text-sm uppercase tracking-[3px] text-gray-500
              md:text-base"
            >
                Hover over a skill for current proficiency
            </h3>

            <div className="mt-20 grid grid-cols-4 gap-5 xs:mt-0">
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
