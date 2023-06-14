import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
    return (
        <div
            className="relative mx-auto flex h-screen 
            max-w-7xl flex-col items-center justify-evenly px-10 
            text-center md:flex-row md:text-left"
        >
            <h3 className="toptitle">Contact</h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-center text-4xl font-semibold">
                    Let me know what you need.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Contact me.
                    </span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center justify-center space-x-5">
                        <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">rabiighais@gmail.com</p>
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">+961 71 557 750</p>
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
                        <p className="text-2xl">Lebanon, Beirut</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
