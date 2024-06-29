import TextContent from "@/Components/Text/TextContent.jsx";

export const Blockquote = ({ blockData }) => {
    return (
        <blockquote className="text-left">
            <TextContent content={blockData.content}/>
        </blockquote>
    );
};

export default Blockquote;