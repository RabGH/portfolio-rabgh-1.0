import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
    return (
        <header
            className="sticky top-0 z-20 mx-auto flex max-w-7xl 
items-start justify-between p-5 xl:items-center"
        >
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://twitter.com/RABBIToCOM"
                    target="_blank"
                    rel="noopener noreferrer"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/RabGH"
                    target="_blank"
                    rel="noopener noreferrer"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/rabii-ghaith/"
                    target="_blank"
                    rel="noopener noreferrer"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>

            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex cursor-pointer flex-row items-center text-gray-300"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    target="_blank"
                    rel="noopener noreferrer"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
                    Get In Touch
                </p>
            </motion.div>
        </header>
    );
}

export default Header;
