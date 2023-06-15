import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@lib/types";
import { urlFor } from "@lib/sanity";
import Image from "next/image";

type Props = {
    experience: Experience;
};

function ExperienceCards({ experience }: Props) {
    return (
        <article
            className="mt-20 flex h-[550px] w-[350px] flex-shrink-0 
            cursor-pointer snap-center flex-col items-center 
            space-y-0 overflow-hidden overflow-x-scroll rounded-lg 
            bg-[#292929] pb-10 pl-10 pr-10 pt-1 opacity-40 
            transition-opacity duration-200 scrollbar 
            hover:opacity-100 sm:w-[500px] sm:pt-5 md:h-auto 
            md:w-[600px] md:overflow-hidden xl:w-[900px] s:mt-0"
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden h-28 w-28 rounded-full 
                object-cover object-center md:block 
                md:rounded-full xl:h-[160px] xl:w-[160px]"
            >
                <Image
                    className="hidden h-28 w-28 rounded-full 
                    object-cover object-center md:block 
                    md:rounded-full xl:h-[160px] xl:w-[160px]"
                    src={
                        experience.companyImage &&
                        urlFor(experience.companyImage)
                            .auto("format")
                            .url()
                            .toString()
                    }
                    alt={experience?.company}
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,..."
                    width={200}
                    height={200}
                />
            </motion.div>

            <div className="px-0 md:px-10">
                <h4 className="hidden text-2xl font-light md:text-4xl">
                    {experience?.jobTitle}
                </h4>
                <p className="mt-1 text-2xl md:font-bold">
                    {experience?.company}
                </p>
                <div className="mt-2 flex space-x-2">
                    {experience.technologies.map((technology) => (
                        <Image
                            key={technology._id}
                            className="h-10 w-10 rounded-full xxs:h-8 xxs:w-8"
                            src={
                                technology.image &&
                                urlFor(technology.image)
                                    .auto("format")
                                    .url()
                                    .toString()
                            }
                            alt="Rabii Ghais"
                            width={100}
                            height={100}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,..."
                        />
                    ))}
                </div>
                <p className="py-5 uppercase text-gray-300">
                    {new Date(experience?.dateStarted).toLocaleDateString()} -{" "}
                    {experience?.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience?.dateEnded).toLocaleDateString()}
                </p>

                <ul className="ml-1 list-disc space-y-2 text-sm md:ml-3 md:space-y-3 md:text-base overflow-y scrollbar">
                    {experience?.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCards;
