import { useEffect, useState } from "react";
import Block from "@/Components/Core/Block.jsx";

import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import ArticleHeader from "@/Components/Text/Headers/ArticleHeader.jsx";
import Attribution from "@/Components/Misc/Attribution.jsx";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { useSetAtom } from "jotai";
import { globalFootnotes } from "@/api/globalFootnotes.js";

const Article = () => {
    let [blocks, setBlocks] = useState([]);
    let [articleData, setArticleData] = useState({});
    let setFootnotes = useSetAtom(footnotesAtom);

    useEffect(() => {
        setBlocks(Blocks);
        setArticleData(article);
        setFootnotes(globalFootnotes);
    }, []);

    return (
        <>
            <div className="mt-12 w-full flex justify-center content-center">

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