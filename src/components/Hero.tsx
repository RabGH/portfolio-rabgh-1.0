import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Rabii Ghais",
            "<Guy-who-loves-cooking.tsx />",
            "<ButLovesToCodeMore />",
            "<Developer />",
            "<Designer />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <BackgroundCircles />
            <Image
                src="/images/RabPassportImage.jpg"
                alt="Rabii Ghais"
                width={500}
                height={500}
                style={{ zIndex: 1000 }}
            />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
        </div>
    );
}

export default Hero;
