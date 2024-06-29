import React, { useEffect, useState } from "react";
import { keygen } from "@/api/keygen.js";

const TextContent = ({ content, className }) => {
    if (!content) return null;
    if (!Array.isArray(content)) throw new Error("Contents must be an array.");

    const render = (chunk) => {
        if (chunk.type !== "rich_text") return null;

        const annotationMap = [
            { type: 'italic', component: 'i', condition: !!chunk.annotations?.italic },
            { type: 'bold', component: 'b', condition: !!chunk.annotations?.bold },
        ];

        return annotationMap.reduce((acc, annotation) => {
            if (annotation.condition) {
                return React.createElement(annotation.component, { key: keygen() }, acc);
            }
            return acc;
        }, chunk.text);

    };

    return (
        <p className={`text-left ${className}`} key={keygen()}>
            {content.map(chunk => render(chunk))}
        </p>
    );
};

export default TextContent;