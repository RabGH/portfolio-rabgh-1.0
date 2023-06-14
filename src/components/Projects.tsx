import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="scrollbar relative z-0 mx-auto flex 
            h-screen max-w-full flex-col items-center 
            justify-evenly overflow-hidden text-left"
        >
            <h3 className="toptitle">Projects</h3>
            <div
                className="scrollbar relative z-20 flex w-full 
                 snap-x snap-mandatory overflow-y-hidden overflow-x-scroll"
            >
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="md:p-34
                        w-screen flex-shrink-0 snap-center flex-col 
                        items-center justify-center space-y-5 p-10 lg:mt-0"
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="/images/RealEstateIcon.jpeg"
                            alt="Real Estate Site Test"
                            className="md:w[400px] mx-auto mt-10 h-[150px] w-[350px] md:h-[400px] xxs:mt-0"
                        />

                        <div className="space-y-5 px-0 md:px-10">
                            <h4 className="text-center text-2xl font-semibold">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                Real Estate Site
                            </h4>

                            <p className="text-center text-base md:text-left s:text-lg">
                                Zak Properties is a top-tier real estate
                                brokerage in Dubai that specializes in selling
                                luxurious apartments, villas, and townhouses, as
                                well as showcasing off-plan projects. Whether
                                you are a first-time buyer or an experienced
                                investor.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="absolute left-0 top-[30%] h-[500px] 
                w-full -skew-y-12 bg-[#F7AB0A]/10"
            />
        </motion.div>
    );
}

export default Projects;
