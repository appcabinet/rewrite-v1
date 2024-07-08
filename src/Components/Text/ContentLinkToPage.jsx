import * as React from 'react';
import { keygen } from "@/api/keygen.js";

const MemoizedContentLinkToPage = React.memo(function MemoizedContentLinkToPage({ chunk, children }) {
        if (chunk.href) {
            return (
                <a href={chunk.href}>
                    {children}
                </a>
            );
        }

        return (
            <a href={chunk?.href} key={keygen()} className={"text-orange-500 hover:underline"}>
                {children}
            </a>
        );
    }
);

export default MemoizedContentLinkToPage;
