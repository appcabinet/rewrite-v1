const elements = [
    {
        id: 0,
        type: "h1",
        content: [
            {
                type: "rich_text",
                text: "Humans have an innate need to aspire to God.",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
        ],
    },
    {
        id: 1,
        type: "paragraph",
        content: [
            {
                type: "rich_text",
                text: "Those that disagree with the above just have a God that manifests itself differently. Sometimes ones deity of choice is POTUS, the Universe, or the promise of Crypto. Sometimes it’s just God. Regardless, ",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
            {
                type: "rich_text",
                text: "God",
                annotations: {
                    italic: true,
                    bold: false,
                },
            },
            {
                type: "rich_text",
                text: " represents a profound ideal embedded deep into our psyche, which without, will almost always lead to nihilism and despair.",
                annotations: {
                    italic: false,
                    bold: false,
                }
            }
        ]
    },
    {
        id: 2,
        type: "paragraph",
        content: [
            {
                type: "rich_text",
                text: "Karen Armstrong explains this in her book, ",
                annotations: {
                    italic: false,
                    bold: false,
                }
            },
            {
                type: "rich_text",
                text: "The History of God:",
                annotations: {
                    italic: true,
                    bold: false,
                }
            }
        ]
    },
    {
        id: 3,
        type: "block_quote",
        content: [
            {
                type: "rich_text",
                text: `“There have been many theories about the origin of religion. Yet it seems that creating gods is something that human beings have always done. When one religious idea ceases to work for them, it is simply replaced.”`,
                annotations: {
                    bold: false,
                    italic: false,
                }
            }
        ]
    },
    {
        id: 4,
        type: "paragraph",
        content: [
            {
                type: "rich_text",
                text: "Although the first instances of religious devotion is entirely conjectural, the earliest known intentional burials are found at the site of Qazfeh in Israel, going back roughly 100,000 years. Göbekli Tepe, which was originally mistaken to be a cemetery, was re-excavated in 1993 and discovered to be one of the oldest religious ritual sites ever discovered.",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
            {
                type: "link_to_page",
                text: "Qazfeh",
                href: "https://www.britannica.com/place/Qafzeh",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
            {
                type: "rich_text",
                text: " in Israel, going back roughly 100,000 years. Göbekli Tepe, which was originally mistaken to be a cemetery, was re-excavated in 1993 and discovered to be one of the oldest religious ritual sites ever discovered.",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
            {
                type: "link_to_page",
                text: "Göbekli Tepe",
                href: "https://www.britannica.com/place/Gobekli-Tepe",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
            {
                type: "rich_text",
                text: ", which was originally mistaken to be a cemetery, was re-excavated in 1993 and discovered to be one of the oldest religious ritual sites ever discovered.",
                annotations: {
                    bold: false,
                    italic: false,
                }
            },
        ]
    },
    {
        id: 5,
        type: "carousel",
        items: [
            {
                type: "image",
                src: "https://picsum.photos/200/200",
                content: [
                    {
                        type: "rich_text",
                        text: "This is a caption",
                        annotations: {
                            bold: false,
                            italic: false,
                        }
                    }
                ]
            },
            {
                type: "image",
                src: "https://picsum.photos/200/200",
                content: [
                    {
                        type: "rich_text",
                        text: "This is a caption",
                        annotations: {
                            bold: false,
                            italic: false,
                        }
                    }
                ]
            },
            {
                type: "image",
                src: "https://picsum.photos/200/200",
                content: [
                    {
                        type: "rich_text",
                        text: "This is a caption",
                        annotations: {
                            bold: false,
                            italic: false,
                        }
                    }
                ]
            },
        ]
    }

];

export default elements;