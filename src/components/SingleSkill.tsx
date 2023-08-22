import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@lib/types";
import { urlFor } from "@lib/sanity";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from '@mui/material/useMediaQuery';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

function SingleSkill({ directionLeft, skill }: Props) {
    const isMobile = useMediaQuery('(max-width:600px)');

    const open = React.useRef(false);

    const handleTooltipClose = () => {
        open.current = false;
    };

    const handleTooltipOpen = () => {
        open.current = true;
    };

    return (
        <div className="group relative flex cursor-pointer">
            <Tooltip
                title={skill?.description}
                placement="top"
                arrow
                open={isMobile ? open.current : undefined}
                onClose={handleTooltipClose}
            >
                <motion.img
                    initial={{ y: directionLeft ? -100 : 100, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="h-20 w-20 rounded-full 
                    border-gray-500 object-cover filter duration-300 ease-in-out group-hover:grayscale
                    sm:h-24 sm:w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 xxxs:h-[65px] xxxs:w-[65px] 
                    xxs:h-[70px] xxs:w-[70px]
                    xs:h-[88px] xs:w-[88px]"
                    src={
                        skill.image &&
                        urlFor(skill.image).auto("format").url().toString()
                    }
                    alt={skill?.title}
                    onClick={isMobile ? handleTooltipOpen : undefined}
                />
            </Tooltip>
        </div>
    );
}

export default SingleSkill;
