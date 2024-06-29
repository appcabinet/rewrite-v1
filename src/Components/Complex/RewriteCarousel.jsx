import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/shadcn/components/ui/carousel.jsx";
import TextContent from "@/Components/Text/TextContent.jsx";


const RewriteCarousel = ({ element }) => {
    return (
        <Carousel className={""}>
            <CarouselContent>
                {element.items.map(item => {
                    return (
                        <CarouselItem key={item.id}>
                            <div className="w-full h-full p-4">
                                <div className={"flex content-center flex-col"}>
                                    <img src={item.src}
                                         width={800}
                                         height={800}
                                         alt={'Random image'}
                                         className="border rounded-xl"/>
                                </div>
                                <div className={"mt-2"}>
                                    {TextContent}
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