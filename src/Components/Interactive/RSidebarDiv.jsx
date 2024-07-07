import React, { useState } from 'react';
import { AiOutlineComment, AiOutlineEllipsis } from "react-icons/ai";
import { Bookmark } from "lucide-react";

const HoverDiv = ({ blockData }) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconStyling = "text-neutral-400 hover:cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out";

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundColor: isHovered ? 'lightblue' : 'white' }}
        >
            <div className={"flex items-center"}>
                <AiOutlineComment className={`${iconStyling} mx-1 text-neutral-400`} size={"1.7em"}/>
                <span
                    className="text-neutral-400 text-sm font-medium">{socialData?.numComments || null}</span>
            </div>
            <div className={"flex items-center"}>
                <Bookmark className={`${iconStyling} mx-1 text-neutral-400`} size={"1.5em"}/>
                <span
                    className="text-neutral-400 text-sm font-medium">4</span>
            </div>
            <div className={"flex items-center"}>
                <AiOutlineEllipsis className={`${iconStyling} mx-1 text-neutral-400`} size={"1.7em"}/>
            </div>
            {children}
        </div>
    );
};

export default HoverDiv;