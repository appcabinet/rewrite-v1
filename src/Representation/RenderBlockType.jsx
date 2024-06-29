import H1 from "../components/Headers/H1.jsx";
import Paragraph from "../components/Text/Paragraph.jsx";
import H2 from "../components/Headers/H2.jsx";
import H3 from "../components/Headers/H3.jsx";
import Blockquote from "../components/Text/Blockquote.jsx";
import LinkToPage from "../components/Text/LinkToPage.jsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "../shadcn/components/ui/carousel.jsx";
import { Image } from "lucide-react";


const RenderBlockType = ({ parentElement, type, children, className }) => {

    if (!type) throw new Error("Cannot render empty Block type.");

    const render = () => {
        switch (type) {
            case "h1":
                return <H1 className={className}>{children}</H1>;
            case "h2":
                return <H2 className={className}>{children}</H2>;
            case "h3":
                return <H3 className={className}>{children}</H3>;
            case "paragraph":
                return <Paragraph>{children}</Paragraph>;
            case "link_to_page":
                return <LinkToPage href={parentElement.href}>{children}</LinkToPage>;
            case "block_quote":
                return <Blockquote>{children}</Blockquote>;
            case "carousel":
                return (
                    <Carousel className={""}>
                        <CarouselContent>
                            {parentElement.content.map(item => {
                                return (
                                    <CarouselItem key={Math.random().toString()}>
                                        <div className="w-full h-full p-4">
                                            <div className={"flex content-center flex-col"}>
                                                <img src={item.src}
                                                     width={800}
                                                     height={800}
                                                     alt={'Random image'}
                                                     className="border rounded-xl"/>
                                            </div>
                                            <div className={"mt-2"}>
                                                <p>
                                                    {item.text}
                                                </p>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                );
            default:
                return <p>{children}</p>;
        }

    };

    return render();
};

export default RenderBlockType;