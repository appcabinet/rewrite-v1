import TextContent from "@/Components/Text/TextContent.jsx";

const Paragraph = ({ blockData }) => {

    return (
        <TextContent content={blockData.content}/>
    );

};

export default Paragraph;