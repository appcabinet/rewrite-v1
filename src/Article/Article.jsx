import { useEffect, useState } from "react";
import Block from "@/Components/Core/Block.jsx";
import { AiOutlineEllipsis } from "react-icons/ai";
import H1 from "@/Components/Text/Headers/H1.jsx";

import { article } from '../api/article.js';
import { Blocks } from '../api/blocks.js';
import Paragraph from "@/Components/Text/Paragraph.jsx";
import ArticleHeader from "@/Components/Text/Headers/ArticleHeader.jsx";
import Attribution from "@/Components/Misc/Attribution.jsx";
import Embed from "@/Components/Complex/Embed.jsx";

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
                    <Embed
                        embedString={`<blockquote class=\"tiktok-embed\" cite=\"https://www.tiktok.com/@ghostofascension/video/7307953512850164993\" data-video-id=\"7307953512850164993\" data-embed-from=\"embed_page\" style=\"max-width:605px; min-width:325px;\"> <section> <a target=\"_blank\" title=\"@ghostofascension\" href=\"https://www.tiktok.com/@ghostofascension?refer=embed\">@ghostofascension</a> <p>Believe in yourself <a title=\"motivation\" target=\"_blank\" href=\"https://www.tiktok.com/tag/motivation?refer=embed\">#motivation</a> <a title=\"ghost\" target=\"_blank\" href=\"https://www.tiktok.com/tag/ghost?refer=embed\">#ghost</a> </p> <a target=\"_blank\" title=\"♬ original sound - Ghostofascension\" href=\"https://www.tiktok.com/music/original-sound-7307953565128002305?refer=embed\">♬ original sound - Ghostofascension</a> </section> </blockquote> <script async src=\"https://www.tiktok.com/embed.js\"></script>`}/>
                </div>
            </div>
        </>
    );
};

export default Article;