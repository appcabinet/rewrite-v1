import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/shadcn/components/ui/carousel.jsx";
import TextContent from "@/Components/Text/TextContent.jsx";
import { keygen } from "@/api/keygen.js";


const RewriteCarousel = ({ blockData: blockData }) => {
    return (
        <Carousel className={"my-8"}>
            <CarouselContent>
                {blockData.items.map(item => {
                    return (
                        <CarouselItem key={keygen()}>
                            <div className="w-full h-full">
                                <div className={"flex content-center flex-col"}>
                                    <img src={item.src}
                                         width={1200}
                                         height={1200}
                                         alt={'Random image'}
                                         className="border rounded-sm"/>
                                </div>
                                <div className={"mt-2"}>
                                    {<TextContent content={item.content} className={'text-center'}/>}
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
};

export default RewriteCarousel;