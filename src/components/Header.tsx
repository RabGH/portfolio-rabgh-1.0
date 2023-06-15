import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Social } from "@lib/types";

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    return (
        <header className="fixed top-0 z-20 mx-auto grid w-full grid-cols-12 items-center justify-center gap-4 p-5 md:mx-auto">
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="col-span-6 flex flex-row items-center justify-start xl:col-span-3 xl:col-start-2 xl:justify-end"
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="col-span-6 flex flex-row justify-end text-gray-300 xl:col-span-3 xl:col-end-12 xl:items-center xl:justify-start"
            >
                <Link
                    href="mailto:rabiighais@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton>
                        <FaEnvelope
                            fontSize="2rem"
                            className="animate-pulse text-[#F7AB0A]/40"
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://api.whatsapp.com/send?phone=71557750"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconButton>
                        <FaWhatsapp
                            fontSize="2rem"
                            className="animate-pulse text-[#F7AB0A]/40"
                        />
                    </IconButton>
                </Link>
                <p className="mt-3 hidden text-sm uppercase text-gray-400 md:inline-flex">
                    Get In Touch
                </p>
            </motion.div>
        </header>
    );
}

export default Header;
