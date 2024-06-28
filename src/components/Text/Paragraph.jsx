const Paragraph = ({ className, children }) => {

    return (
        <p className={`text-left ${className}`}>
            {children}
        </p>
    );

};

export default Paragraph;