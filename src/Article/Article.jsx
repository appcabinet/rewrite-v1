import { useEffect, useState } from "react";
import Blocks from '../api/blocks.js';
import Block from "@/Components/Core/Block.jsx";

const Article = () => {
    let [blocks, setBlocks] = useState([]);

    useEffect(() => {
        setBlocks(Blocks);
    }, []);


    return (
        <div className="article-root my-12">
            {blocks.map(blockData => (
                <Block key={blockData.id + '-block'} blockData={blockData}/>
            ))}
        </div>
    );
};

export default Article;