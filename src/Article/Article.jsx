import { useEffect, useState } from "react";
import Block from "@/Components/Core/Block.jsx";

import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import ArticleHeader from "@/Components/Text/Headers/ArticleHeader.jsx";
import Attribution from "@/Components/Misc/Attribution.jsx";
import { footnotesAtom } from "@/atoms/footnotesAtom.js";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { globalFootnotes } from "@/api/globalFootnotes.js";
import RewriteSheet from "@/Components/Complex/RewriteSheet.jsx";
import { selectedBlockAtom } from "@/atoms/selectedBlockAtom.js";
import { articleAtom } from "@/atoms/articleAtom.js";

const Article = () => {
    const [blocks, setBlocks] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [articleData, setArticleData] = useAtom(articleAtom);
    const selectedBlock = useAtomValue(selectedBlockAtom);
    const setFootnotes = useSetAtom(footnotesAtom);


    useEffect(() => {
        setBlocks(Blocks);
        setArticleData(article);
        setFootnotes(globalFootnotes);
    }, []);

    return (
        <>
            <div className="mt-12 w-full flex justify-center content-center">
                <div className="article-root my-12 ">
                    <RewriteSheet blockData={selectedBlock} open={dialogOpen} onOpenChange={setDialogOpen}/>
                    <ArticleHeader className="text-black">
                        {articleData?.title}
                    </ArticleHeader>
                    <Attribution>
                        by: {articleData?.author?.name}
                    </Attribution>
                    {blocks.map(blockData => (
                        <Block key={blockData.id + '-block'} blockData={blockData} setOpen={setDialogOpen}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Article;