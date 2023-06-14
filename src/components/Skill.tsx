import React from "react";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            {/*Vercel*/}
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
                src="/images/vercel.webp"
                alt="Rabii Ghais"
            />
            <div
                className="h-22 w-22 absolute rounded-full opacity-0 transition duration-300 
                ease-in-out group-hover:bg-gray-500 group-hover:opacity-80 sm:h-24 
                sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 xxxs:h-[65px] xxxs:w-[65px] 
                xxs:h-[79px] xxs:w-[79px]
                xs:h-[88px] xs:w-[88px]"
            >
                <div className="flex h-full items-center justify-center">
                    <p className="text-3xl font-bold text-black opacity-100">
                        60%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
