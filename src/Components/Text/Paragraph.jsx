import TextContent from "@/Components/Text/TextContent.jsx";

const Paragraph = ({ blockData }) => {

    return (
        <TextContent content={blockData.content} className={'text-lg leading-7 text-neutral-800'}/>
    );

};

export default Paragraph;