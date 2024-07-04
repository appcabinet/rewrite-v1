import TextContent from "@/Components/Text/TextContent.jsx";

const ArticleHeader = ({ children }) => {
    return (
        <h1 className={"text-5xl mb-2 mt-12 text-left"}>
            {children}
        </h1>
    );

};

export default ArticleHeader;