import TextContent from "@/Components/Text/TextContent.jsx";

export const Blockquote = ({ blockData }) => {
    return (
        <div className={"border-l-4 border-l-orange-500 pl-4 rounded"}>
            <blockquote className="text-left">
                <TextContent content={blockData.content} className={"text-lg text-gray-950"}/>
            </blockquote>
        </div>
    );
};

export default Blockquote;