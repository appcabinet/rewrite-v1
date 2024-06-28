import H1 from "../components/Headers/H1.jsx";
import Paragraph from "../components/Text/Paragraph.jsx";
import H2 from "../components/Headers/H2.jsx";
import H3 from "../components/Headers/H3.jsx";
import Blockquote from "../components/Text/Blockquote.jsx";

const renderBlockType = ({ type, children, className }) => {

    const render = () => {
        console.log("type:", type);
        console.log("children:", children);

        switch (type) {
            case "h1":
                return <H1 className={className}>{children}</H1>;
            case "h2":
                return <H2 className={className}>{children}</H2>;
            case "h3":
                return <H3 className={className}>{children}</H3>;
            case "paragraph":
                return <Paragraph>{children}</Paragraph>;
            case "block_quote":
                return <Blockquote>{children}</Blockquote>;
            default:
                return <p>${children}</p>;
        }

    };

    return render();
};

export default renderBlockType;