import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";
import Paragraph from "@/Components/Text/Paragraph.jsx";
import { useEffect, useState } from "react";

import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineEllipsis } from "react-icons/ai";


const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: Paragraph,
    block_quote: Blockquote,
    link_to_page: LinkToPage,
    carousel: RewriteCarousel,
};

const Block = ({ blockData }) => {
    const [socialData, setSocialData] = useState();
    const [footerData, setFooterData] = useState();

    useEffect(() => {
        setSocialData(blockData.social);
    }, []);

    const iconStyling = "text-neutral-400 hover:cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out";

    const renderRSidebar = () => {
        if (blockData?.sidebar === false) return null;
        return (
            <div className="w-8 h-full flex flex-col justify-end items-center rounded-xl">
                <AiOutlineComment className={`${iconStyling} text-neutral-400`} size={"1.7em"}/>
                <span className="text-neutral-400 text-sm font-medium">{socialData?.numComments}</span>
            </div>
        );
    };

    const renderLSidebar = () => {
        return (
            <div className="w-8 h-full flex flex-col justify-center items-center">
                {blockData.footnote?.enabled ?
                    <AiOutlineInfoCircle className={`${iconStyling} text-neutral-400`} size={"1.7em"}/>
                    : null
                }
                {/*<AiOutlineEllipsis className={`${iconStyling}`} size={"1.5em"}/>*/}
            </div>
        );
    };


    const Component = componentRegistry[blockData.type];
    return (
        <div className="my-4 w-full flex justify-end items-center">
            {renderLSidebar()}
            <div className="flex-1 px-6">
                <Component key={blockData.id + '-component'} blockData={blockData}/>
            </div>
            {renderRSidebar()}
        </div>
    );
};

export default Block;