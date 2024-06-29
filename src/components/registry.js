import H1 from "@/components/Headers/H1.jsx";
import H2 from "@/components/Headers/H2.jsx";
import H3 from "@/components/Headers/H3.jsx";
import Paragraph from "@/components/Text/Paragraph.jsx";
import Blockquote from "@/components/Text/Blockquote.jsx";
import LinkToPage from "@/components/Text/LinkToPage.jsx";
import { Carousel } from "@/shadcn/components/ui/carousel.jsx";


export const componentRegistry = {
    h1: H1,
    h2: H2,
    h3: H3,
    paragraph: Paragraph,
    block_quote: Blockquote,
    link_to_page: LinkToPage,
    carousel: Carousel,
};