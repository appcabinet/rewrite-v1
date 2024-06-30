import TextContent from "@/Components/Text/TextContent.jsx";

const Paragraph = ({ blockData }) => {

    return (
        <TextContent content={blockData.content} className={'text-lg leading-7'}/>
    );

};

export default Paragraph;