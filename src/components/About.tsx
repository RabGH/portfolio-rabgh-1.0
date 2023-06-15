import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageInfo } from "@lib/types";
import { urlFor } from "@lib/sanity";

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen max-w-7xl 
            flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="toptitle">About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:h-65 h-66 -mb-20 hidden w-56 
                flex-shrink-0 rounded-full object-cover
                md:mb-0 md:block md:w-64 md:rounded-lg xl:h-[500px] xl:w-[300px]"
                src={
                    pageInfo.profilePic &&
                    urlFor(pageInfo.profilePic).auto("format").url().toString()
                }
                alt={pageInfo?.name}
            />
            <div className="mt-10 space-y-10 px-0 md:px-20">
                <h4 className="text-2xl font-semibold sm:mt-20 md:mt-10 md:block md:text-3xl xl:mt-10">
                    A{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        little
                    </span>{" "}
                    background
                </h4>
                <p className="text-sm">{pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    );
}

export default About;
