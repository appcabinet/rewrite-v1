import { useEffect, useState } from "react";
import Block from "@/Components/Core/Block.jsx";
import { AiOutlineEllipsis } from "react-icons/ai";
import H1 from "@/Components/Text/Headers/H1.jsx";

import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import Paragraph from "@/Components/Text/Paragraph.jsx";
import ArticleHeader from "@/Components/Text/Headers/ArticleHeader.jsx";
import Attribution from "@/Components/Misc/Attribution.jsx";

const Article = () => {
    let [blocks, setBlocks] = useState([]);
    let [articleData, setArticleData] = useState({});

    useEffect(() => {
        setBlocks(Blocks);
        setArticleData(article);
    }, []);

    return (
        <>
            <div className="bg-orange-500 w-full h-96">
            </div>
            <div className="w-full flex justify-center content-center">

                <div className="article-root my-12 ">

                    <ArticleHeader className="text-black">
                        {articleData.title}
                    </ArticleHeader>
                    <Attribution>
                        by: {articleData?.author?.name}
                    </Attribution>

                    {blocks.map(blockData => (
                        <Block key={blockData.id + '-block'} blockData={blockData}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Article;