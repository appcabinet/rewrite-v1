const LinkToPage = ({ href, children }) => {
    return (
        <a href={href}>
            {children}
        </a>
    );
};

export default LinkToPage;