import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@lib/types";
import { urlFor } from "@lib/sanity";

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-cooking.tsx",
            "<ButLovesTo CodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <BackgroundCircles />
            <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt={pageInfo?.name}
                width={500}
                height={500}
                className="z-1000 relative mx-auto h-32 w-32 rounded-full object-cover"
            />
            <div className="z-20">
                <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
                    {pageInfo?.role}
                </h2>
                <h1 className="px-10 text-5xl font-semibold lg:text-6xl">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
