import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
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

            <div className="grid grid-cols-4 gap-5 overflow-hidden">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    );
}

export default Skills;
