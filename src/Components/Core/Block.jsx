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
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
import RewritePanel from "@/Components/Complex/RewritePanel.jsx";
import RewriteDialog from "@/Components/Complex/RewriteDialog.jsx";
import Info from "@/Components/Interactive/Info.jsx";
import StandardImage from "@/Components/Misc/StandardImage.jsx";
import Centerquote from "@/Components/Text/Centerquote.jsx";
import Embed from "@/Components/Complex/Embed.jsx";
import Footnote from "@/Components/Interactive/Footnote.jsx";
import { Bookmark } from "lucide-react";


const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: Paragraph,
    block_quote: Blockquote,
    link_to_page: LinkToPage,
    carousel: RewriteCarousel,
    sheet: RewriteSheet,
    panel: RewritePanel,
    dialog: RewriteDialog,
    image: StandardImage,
    center_quote: Centerquote,
    embed: Embed,
};

const Block = ({ blockData, sidebars }) => {
    const [socialData, setSocialData] = useState({});
    const [footnoteData, setFootnoteData] = useState({});
    const [isHovered, setIsHovered] = useState(false);
    const [componentClicked, setComponentClicked] = useState(null);

    if (sidebars == null) sidebars = true;

    const iconStyling = "text-neutral-400 hover:cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out";

    useEffect(() => {
        setSocialData(blockData.social);
        setFootnoteData(blockData.footnote);
    }, []);

    const handleMouseEnter = () => {
        console.log('hovered');
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        console.log('unhovered');
        setIsHovered(false);
    };


    const renderLSidebar = () => {
        if (sidebars === false) return null;
        return (
            <div className="w-10 h-full flex flex-col justify-center items-center">
                {blockData.footnote?.enabled ?
                    <RewriteDialog Trigger={Info} title={footnoteData.title}>
                        {footnoteData?.blocks?.map(blockData => (
                            <Block key={blockData.id + '-block'} blockData={blockData} sidebars={false}/>
                        ))}
                    </RewriteDialog>
                    : null
                }
            </div>
        );
    };

    const renderRSidebar = () => {
        if (sidebars === false) return null;
        return (
            <div className="w-36 h-full flex space justify-between items-center rounded-xl">
                {isHovered &&
                    <>
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
                    </>
                }
            </div>
        );
    };

    if (!blockData.type) return null;
    const Component = componentRegistry[blockData.type];
    return (
        <div
            className="my-0 py-2 w-full max-w-full flex justify-center items-center hover:cursor-pointer transition ease-in-out rounded-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {renderLSidebar()}
            <div onClick={console.log}
                 className={`flex-1 px-4`}>
                {blockData && <Component key={blockData.id + '-component'} blockData={blockData}/>}
            </div>
            {renderRSidebar()}
        </div>
    );
};

export default Block;