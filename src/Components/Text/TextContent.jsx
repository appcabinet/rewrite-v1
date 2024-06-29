import React from "react";

const TextContent = ({ contents }) => {
    if (!contents) return null;
    if (!Array.isArray(contents)) throw new Error("Contents must be an array.");

    const render = (content) => {
        if (content.type !== "rich_text") return null;

        const annotationMap = [
            { type: 'italic', component: 'i', condition: !!content.annotations?.italic },
            { type: 'bold', component: 'b', condition: !!content.annotations?.bold },
        ];

        return annotationMap.reduce((acc, annotation) => {
            if (annotation.condition) {
                return React.createElement(annotation.component, null, acc);
            }
            return acc;
        }, content.text);

    };

    return (
        <p className={"text-left"}>
            {contents.map(content => render(content))}
        </p>
    );
};

export default TextContent;