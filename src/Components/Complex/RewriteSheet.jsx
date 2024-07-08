import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shadcn/components/ui/sheet";
import { useState } from "react";

const RewriteSheet = ({ blockData, ...props }) => {
    const [socialData, setSocialData] = useState(blockData?.social);

    return (
        <Sheet {...props}>
            <SheetContent className={"w-[1200px] sm:w-[1200px]"}>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default RewriteSheet;
