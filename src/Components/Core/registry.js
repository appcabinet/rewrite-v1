import H1 from "@/Components/Text/Headers/H1.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";
import H3 from "@/Components/Text/Headers/H3.jsx";
import TextContent from "@/Components/Text/TextContent.jsx";
import Blockquote from "@/Components/Text/Blockquote.jsx";
import LinkToPage from "@/Components/Text/LinkToPage.jsx";
import RewriteCarousel from "@/Components/Complex/RewriteCarousel.jsx";


export const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: TextContent,
    block_quote: Blockquote,
    link_to_page: LinkToPage,
    carousel: RewriteCarousel,
};