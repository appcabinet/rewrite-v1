import TextContent from "@/Components/Text/TextContent.jsx";

export const Blockquote = ({ blockData }) => {
    return (
        <div
            className={"border-l-4 border-l-orange-500 rounded-lg bg-neutral-100 pl-4 pt-2 pr-4 pb-2 shadow hover:cursor-pointer transition ease-in-out my-1"}>
            <blockquote className="text-left">
                <TextContent content={blockData.content} className={"text-lg text-gray-950 ps-0"}/>
            </blockquote>
            {blockData.source &&
                <a href={blockData.source}
                   className="text-right my-0 text-gray-400 font-light hover:text-blue-500 hover:underline hover:cursor-pointer">
                    Source
                </a>
            }
        </div>
    );
};

export default Blockquote;