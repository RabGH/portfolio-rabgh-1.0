import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import { useScrollPosition } from "@/components/hooks/scrollPageHook";
import {
    HiHome,
    HiUser,
    HiBriefcase,
    HiCode,
    HiFolder,
    HiMail,
} from "react-icons/hi";

export function Navbar() {
    const scrollPosition = useScrollPosition();
    const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
    ];
    const [currentSection, setCurrentSection] = useState(sections[0]);

    useEffect(() => {
        const getOffsetTop = (id: any) => {
            const element = document.getElementById(id);
            if (element) {
                return element.offsetTop;
            }
            return 0;
        };

        const setCurrentSectionByScroll = () => {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                const offsetTop = getOffsetTop(section);
                if (offsetTop >= scrollPosition) {
                    setCurrentSection(section);
                    break;
                }
            }
        };
        setCurrentSectionByScroll();
    }, [scrollPosition]);

    return (
        <div className="mb-10 flex w-full justify-center md:mb-20">
            <nav className=" fixed flex max-w-max animate-pulse items-center justify-center space-x-4 rounded-xl p-4 backdrop-blur-lg">
                <a href="#hero">
                    <HiHome
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "hero"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
                <a href="#about">
                    <HiUser
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "about"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
                <a href="#experience">
                    <HiBriefcase
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "experience"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
                <a href="#skills">
                    <HiCode
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "skills"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
                <a href="#projects">
                    <HiFolder
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "projects"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
                <a href="#contact">
                    <HiMail
                        size={24}
                        opacity={0.6}
                        className={
                            currentSection === "contact"
                                ? "text-orange-400"
                                : "text-gray-300 hover:text-orange-400"
                        }
                    />
                </a>
            </nav>
        </div>
    );
}
