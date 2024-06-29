import React from "react";

const renderContent = (contents) => {
    if (!contents) return null;

    const render = (content) => {
        const annotationMap = [
            { type: 'italic', component: 'i', condition: !!content.annotations?.italic },
            { type: 'bold', component: 'b', condition: !!content.annotations?.bold },
        ];

        if (content.type !== "rich_text") return null;

        return annotationMap.reduce((acc, annotation) => {
            if (annotation.condition) {
                return React.createElement(annotation.component, null, acc);
            }
            return acc;
        }, content.text);

    };

    const validateBlock = () => {
        if (contents.length === 0) return null;
        if (!contents.annotations) throw new Error("Annotations are required");
    };

    return contents.map(content => render(content));
};

export default renderContent;