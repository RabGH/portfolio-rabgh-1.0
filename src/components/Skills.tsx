import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen"
        >
        <h3>Skills</h3>
        </motion.div>
    );
}

export default Skills;
