import { useEffect, useState } from "react";
import elements from '../api/elements';
import Block from "@/Components/Core/Block.jsx";

const Article = () => {
    return (
        <div className="article-root bg-red-400">
            {elements.map(element => (
                <Block key={element.id + '-block'} element={element}/>
            ))}
        </div>
    );
};

export default Article;