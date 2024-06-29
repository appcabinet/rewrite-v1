import H1 from "@/Components/Headers/H1.jsx";
import H2 from "@/Components/Headers/H2.jsx";
import H3 from "@/Components/Headers/H3.jsx";
import TextContent from "@/Components/Text/TextContent.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";

const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: TextContent,
    block_quote: Blockquote,
    link_to_page: LinkToPage,
    carousel: RewriteCarousel,
};

const Block = ({ element }) => {
    const Component = componentRegistry[element.type];
    return <Component key={element.id + '-component'} element={element}/>;
};

export default Block;