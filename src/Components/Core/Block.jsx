import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";
import Paragraph from "@/Components/Text/Paragraph.jsx";

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
    const Component = componentRegistry[blockData.type];
    return (
        <div className="my-4">
            <Component key={blockData.id + '-component'} blockData={blockData}/>
        </div>
    );
};

export default Block;