import { useEffect, useState } from "react";

import elements from "./elements.js";
import { sequence } from "./sequence.js";
import RenderBlockType from "./RenderBlockType.jsx";
import Block from "../components/Block.jsx";
import renderContent from "./renderContent.jsx";

const Representation = () => {
    let [blocks, setBlocks] = useState([]);

    useEffect(() => {
        render();
    }, []);

    const render = () => {
        const newBlocks = [];

        sequence.forEach(block => {
            if (block.type === "block") {
                const element = elements[block.element_id]; // Hashable element
                const content = renderContent(element.content);

                const renderedBlock = RenderBlockType({
                    parentElement: element,
                    type: element.type,
                    children: content,
                });

                newBlocks.push(renderedBlock);
            }
        });

        setBlocks(newBlocks);
    };

    return (
        <>
            {blocks.map(element => (
                <Block key={Math.random().toString()}>
                    {element}
                </Block>
            ))}
        </>
    );

};

export default Representation;