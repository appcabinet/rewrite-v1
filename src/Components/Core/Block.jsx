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
import { Button } from "@/shadcn/components/ui/button.jsx";
import Info from "@/Components/Interactive/Info.jsx";
import { Image } from "lucide-react";
import StandardImage from "@/Components/Misc/StandardImage.jsx";
import Centerquote from "@/Components/Text/Centerquote.jsx";
import Embed from "@/Components/Complex/Embed.jsx";


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

    if (sidebars == null) sidebars = true;

    useEffect(() => {
        setSocialData(blockData.social);
        setFootnoteData(blockData.footnote);
    }, []);

    const iconStyling = "text-neutral-400 hover:cursor-pointer hover:text-gray-600 transition duration-300 ease-in-out";

    const renderLSidebar = () => {
        if (sidebars === false) return null;
        return (
            <div className="w-8 h-full flex flex-col justify-center items-center">
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
            <div className="w-8 h-full flex flex-col justify-end items-center rounded-xl">
                {socialData?.enabled &&
                    <>
                        <AiOutlineComment className={`${iconStyling} text-neutral-400`} size={"1.7em"}/>
                        <span className="text-neutral-400 text-sm font-medium">{socialData?.numComments || null}</span>
                    </>
                }
            </div>
        );
    };

    const Component = componentRegistry[blockData.type];
    return (
        <div className="my-4 w-full flex justify-end items-center">
            {renderLSidebar()}
            <div className={`flex-1 ${sidebars ? 'px-6' : 'px-0'}`}>
                {blockData && <Component key={blockData.id + '-component'} blockData={blockData}/>}
            </div>
            {renderRSidebar()}
        </div>
    );
};

export default Block;