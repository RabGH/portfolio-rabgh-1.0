import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen 
            min-h-screen max-w-[2000px] flex-col items-center 
            justify-center text-center md:text-left xl:flex-row 
            xl:space-y-0 xl:px-10"
        >
            <h3 className="toptitle">Skills</h3>
        </motion.div>
    );
}

export default Skills;
