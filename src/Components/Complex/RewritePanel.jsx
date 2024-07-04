import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/components/ui/tabs";
import { useEffect, useState } from "react";
import { keygen } from "@/api/keygen.js";
import TextContent from "@/Components/Text/TextContent.jsx";
import Block from "@/Components/Core/Block.jsx";
import H2 from "@/Components/Text/Headers/H2.jsx";

const RewritePanel = ({ blockData }) => {
    const items = blockData.items;
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     setItems(blockData?.items);
    // }, [blockData]);

    const renderTabTriggers = () => {
        return items?.map(item => (
            <TabsTrigger key={keygen()} value={valuegen(item.title)}>
                {item.title}
            </TabsTrigger>
        ));
    };

    const renderTabContents = () => {
        return items?.map(item => (
            <TabsContent key={keygen()} value={valuegen(item.title)}
                         className={"bg-neutral-100 pt-1 px-6 pb-1 rounded-md"}>
                <H2 className={'font-normal m-0 p-0 text-left'}>
                    {item.title}
                </H2>
                <hr className={"mt-2"}/>
                {item?.blocks?.map(blockData => (
                    <Block key={keygen()} blockData={blockData} sidebars={false}/>
                ))}
                <TextContent content={item?.blocks?.content}/>
            </TabsContent>
        ));
    };

    const valuegen = (value) => {
        // replaces ' ' with '_' and lowercases
        return value.replace(/ /g, '_').toLowerCase();
    };

    if (!blockData) return null;

    return (
        <div className="w-full my-5">
            <Tabs className="w-full" defaultValue={valuegen(items[0]?.title)}>
                <TabsList className={'flex flex-row justify-start'}>
                    {renderTabTriggers()}
                </TabsList>
                {renderTabContents()}
            </Tabs>
        </div>
    );
};

export default RewritePanel;