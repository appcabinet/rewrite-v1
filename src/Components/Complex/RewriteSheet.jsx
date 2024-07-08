import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shadcn/components/ui/sheet";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { articleAtom } from "@/atoms/articleAtom.js";
import TextContent from "@/Components/Text/TextContent.jsx";
import { componentRegistry } from "@/Components/Core/Block.jsx";
import { permittedSocialTypes } from "@/helpers.js";

const RewriteSheet = ({ blockData, ...props }) => {
    const articleData = useAtomValue(articleAtom);
    const [socialData, setSocialData] = useState(blockData?.social);

    if (!permittedSocialTypes.includes(blockData?.type)) {
        return null;
    }

    const renderBlock = () => {
        const Component = componentRegistry[blockData?.type];
        if (!blockData) return null;

        return (
            <Component key={blockData.id + '-component'}
                       blockData={blockData}
            />
        );
    };

    return (
        <Sheet {...props}>
            <SheetContent className={"w-7/12"}>
                <SheetHeader>
                    <SheetTitle>{articleData?.author?.name}</SheetTitle>
                    <SheetDescription>
                        <hr className={"my-2"}/>
                        {renderBlock()}
                        <hr className={"my-2"}/>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default RewriteSheet;
