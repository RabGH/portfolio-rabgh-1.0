import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@lib/types";
import { urlFor } from "@lib/sanity";
import Image from "next/image";

type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

function SingleSkill({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="h-22 w-22 rounded-full 
              border-gray-500 object-cover filter duration-300 ease-in-out group-hover:grayscale
                sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 xxxs:h-[65px] xxxs:w-[65px] 
                xxs:h-[79px] xxs:w-[79px]
                xs:h-[88px] xs:w-[88px]"
                src={
                    skill.image &&
                    urlFor(skill.image).auto("format").url().toString()
                }
                alt={skill?.title}
            />
            <div
                className="absolute h-full w-full rounded-full opacity-0 transition duration-300 
                ease-in-out group-hover:bg-gray-500 group-hover:opacity-80"
            >
                <div className="flex h-full items-center justify-center">
                    <p className="text-3xl font-bold text-black opacity-100">
                        {skill?.progress}%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleSkill;
