import TextContent from "@/Components/Text/TextContent.jsx";

const H2 = ({ blockData }) => {

    return (
        <h2>
            <TextContent content={blockData.content}/>
        </h2>
    );

};

export default H2;