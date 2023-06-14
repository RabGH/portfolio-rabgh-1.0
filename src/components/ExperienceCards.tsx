import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCards({}: Props) {
    return (
        <article
            className="sm:w-[500px]md:h-auto flex h-[550px] w-[350px] 
            flex-shrink-0 cursor-pointer snap-center flex-col 
            items-center space-y-0 overflow-hidden overflow-y-scroll
            rounded-lg bg-[#292929] pb-10 pl-10 pr-10 pt-1 
            opacity-40 transition-opacity duration-200 
            hover:opacity-100 sm:pt-5 md:mt-10 
            md:w-[600px] md:overflow-hidden xl:w-[900px]"
        >
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hidden h-28 w-28 rounded-full 
                object-cover object-center md:block 
                md:rounded-full xl:h-[200px] xl:w-[200px]"
                src="/images/RealEstateIcon.jpeg"
                alt="Rabii Ghais"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light md:mt-5 md:text-4xl xl:text-4xl">
                    Real Estate Website
                </h4>
                <p className="mt-1 text-2xl md:font-bold">ZakProperties</p>
                <div className="my-2 flex space-x-2">
                    {/*TypeScript*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/TS.png"
                        alt="Rabii Ghais"
                    />
                    {/*Next.js*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/next.jpeg"
                        alt="Rabii Ghais"
                    />
                    {/*VSCode*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/vscode.webp"
                        alt="Rabii Ghais"
                    />
                    {/*Material-UI*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/material-ui.png"
                        alt="Rabii Ghais"
                    />
                    {/*Sanity*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/sanity.jpg"
                        alt="Rabii Ghais"
                    />
                    {/*Vercel*/}
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/images/vercel.webp"
                        alt="Rabii Ghais"
                    />
                    {/*React*/}
                    <img
                        className="hidden h-10 w-10 rounded-full md:block"
                        src="/images/reactlogo.jpg"
                        alt="Rabii Ghais"
                    />
                </div>
                <p className="py-5 uppercase text-gray-300">
                    Started project 2022 - present
                </p>

                <ul className="ml-5 list-disc space-y-4 text-sm">
                    <li>
                        Built a modern and responsive real estate website with
                        Next.js and React
                    </li>
                    <li>
                        Used Sanity.io as a headless CMS to manage and update
                        content dynamically
                    </li>
                    <li>
                        Implemented custom styled components and Material UI for
                        consistent and appealing UI elements
                    </li>
                    <li>
                        Optimized image loading with next-sanity-image and
                        react-responsive-carousel
                    </li>
                    <li>
                        Added a custom search filter and a search page to allow
                        users to find properties easily
                    </li>
                    <li>
                        Integrated Leaflet.js to display interactive maps of
                        property locations
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCards;
