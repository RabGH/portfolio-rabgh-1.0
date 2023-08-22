import React, { useRef } from "react";
import { motion } from "framer-motion";
import ExperienceCards from "./ExperienceCards";
import { Experience } from "@lib/types";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

type Props = {
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 300;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="screenLayoutExpProj"
        >
            <h3 className="toptitle">Experience</h3>

            <div
                className="flex w-full snap-x snap-mandatory
                overflow-x-scroll pt-10 scrollbar"
            >
                <button className="" onClick={scrollLeft}>
                    <FiChevronLeft className="animate-pulse" />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex snap-x snap-mandatory overflow-x-scroll p-5 scrollbar"
                >
                    {experiences?.map((experience) => (
                        <ExperienceCards
                            key={experience._id}
                            experience={experience}
                        />
                    ))}
                </div>
                <button className="" onClick={scrollRight}>
                    <FiChevronRight className="animate-pulse" />
                </button>
            </div>
        </motion.div>
    );
}

export default WorkExperience;
