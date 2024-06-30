import React, { useEffect, useState } from "react";
import { keygen } from "@/api/keygen.js";

const TextContent = ({ content, className }) => {
    if (!content) return null;
    if (!Array.isArray(content)) throw new Error("Contents must be an array.");

    const render = (chunk) => {
        const annotationMap = [
            { type: 'italic', component: 'i', condition: !!chunk.annotations?.italic },
            { type: 'bold', component: 'span', condition: !!chunk.annotations?.bold, className: "font-semibold" },
        ];

        const annotatedText = annotationMap.reduce((acc, annotation) => {
            if (annotation.condition) {
                return React.createElement(
                    annotation.component,
                    { key: keygen(), className: annotation.className },
                    acc
                );
            }
            return acc;
        }, chunk.text);

        if (chunk.type === 'link_to_page') {
            return React.createElement(
                'a',
                { key: keygen(), className: "text-orange-500 hover:underline", href: chunk.href },
                ...annotatedText
            );
        }

        return annotatedText;
    };

    return (
        <p className={`text-left ${className}`} key={keygen()}>
            {content.map(chunk => render(chunk))}
        </p>
    );
};

export default TextContent;