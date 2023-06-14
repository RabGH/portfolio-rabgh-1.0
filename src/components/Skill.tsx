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
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="h-24 w-24 rounded-full border-gray-500 object-cover
                filter group-hover:grayscale xl:h-32 xl:w-32"
                src="/images/vercel.webp"
                alt="Rabii Ghais"
            />
        </div>
    );
}

export default Skill;
