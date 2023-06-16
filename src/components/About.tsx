import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@lib/types";

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="vh-80 relative mx-auto flex max-w-7xl 
            flex-col items-center justify-evenly space-y-32 px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="toptitle">About</h3>
            <div className="space-y-5 px-0 md:px-20">
                <p className="text-base md:text-lg">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}

export default About;
