import TextContent from "@/Components/Text/TextContent.jsx";

const H1 = ({ blockData }) => {
    return (
        <h1 className={"text-3xl mb-5"}>
            <TextContent content={blockData.content}/>
        </h1>
    );

};

export default H1;