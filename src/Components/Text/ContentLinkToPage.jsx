import * as React from 'react';
import { keygen } from "@/api/keygen.js";
import { useAtom, useSetAtom } from "jotai";
import { resourcesAtom } from "@/atoms/resourcesAtom.js";
import { useEffect, useState } from "react";

const URL_PATTERN =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;

const MemoizedContentLinkToPage = React.memo(function MemoizedContentLinkToPage({ chunk, children }) {
        const [resources, setResources] = useAtom(resourcesAtom);
        const resourceCount = resources.length;
        const newResourceCount = resourceCount + 1;

        if (chunk.href) {
            return (
                <a href={chunk.href}>
                    {children}
                    <sup>{newResourceCount}</sup>
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
