import React from "react";

type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div
            className="relative z-0 mx-auto flex h-screen 
            max-w-full flex-col items-center justify-evenly 
            overflow-hidden text-left md:flex-row"
        >
            <h3 className="toptitle">Projects</h3>
            <div
                className="relative z-20 flex w-full snap-x 
                 snap-mandatory overflow-y-hidden overflow-x-scroll"
            >
                {projects.map((project, i) => (
                    <div
                        className="md:p-44 h-screen w-screen
                     flex-shrink-0 snap-center flex-col items-center 
                     justify-center space-y-5 p-20"
                    >
                        <img
                            src="/images/RealEstateIcon.jpeg"
                            alt="Real Estate Site Test"
                        />
                        <div>
                            <h4 className="text-center text-4xl font-semibold">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                Real Estate Site
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className="absolute left-0 top-[30%] h-[500px] 
                w-full -skew-y-12 bg-[#F7AB0A]/10"
            />
        </div>
    );
}

export default Projects;
// {projects.length}
// {i + 1}
