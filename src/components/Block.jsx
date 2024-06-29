import { componentRegistry } from "@/components/registry.js";

const Block = ({ element, element_id }) => {
    const Component = componentRegistry[element.type];
    return <Component key={element_id} element={element}/>;
};

export default Block;