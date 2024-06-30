import TextContent from "@/Components/Text/TextContent.jsx";

export const Blockquote = ({ blockData }) => {
    return (
        <div
            className={"border-l-4 border-l-orange-500 pl-4 rounded-lg bg-neutral-100 p-2 shadow hover:cursor-pointer transition ease-in-out"}>
            <blockquote className="text-left">
                <TextContent content={blockData.content} className={"text-lg text-gray-950"}/>
            </blockquote>
            <p className="text-right my-0 px-2 text-gray-400 font-light hover:text-blue-500 hover:underline hover:cursor-pointer">
                Source
            </p>
        </div>
    );
};

export default Blockquote;