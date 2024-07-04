export const Blocks = [
    {
        id: 0,
        type: "h3",
        sidebar: false,
        content: [
            {
                type: "rich_text",
                text: "Humans beings have an innate need to aspire to God.",
                annotations: {
                    bold: true,
                    italic: false,
                }
            },
        ],
    },
    {
        id: 1,
        type: "paragraph",
        footnote: {
            enabled: false,
            title: "Jungian Psychology",
            blocks: [
                {
                    type: "paragraph",
                    id: 13,
                    content: [
                        {
                            type: "rich_text",
                            text: "If you would like to learn more about the unconscious influence of God in the human psyche, I highly recommend reading Carl Jung. You can read more of his works ",
                            annotations: {
                                bold: false,
                                italic: false,
                            }
                        },
                        {
                            type: "link_to_page",
                            text: "here.",
                            href: "https://www.britannica.com/biography/Carl-Jung",
                            annotations: {
                                bold: false,
                                italic: false
                            }
                        }
                    ]
                }
            ],
        },
        social: {
            enabled: true,
            numComments: 23,
            comments: []
        },
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
        ],
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
        social: {
            enabled: true,
            numComments: 12,
            comments: []
        },
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
        id: 24,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 1,
            comments: [],
        },
        footnote: {
            enabled: true,
        },
        content: [
            {
                type: "rich_text",
                text: "For hundreds of thousands of years human beings have co-evolved with the concept of God. The symbolic story of Adam and Eve represents humans coming to consciousness (and therefore self-consciousness) after the creation of heaven and earth. Echoes of similar creation myths can be found across history and other religions such as Pandoras box, the Enuma Eilish, and many more."
            }
        ]
    },
    {
        id: 10,
        type: "panel",
        social: {
            enabled: false,
            numComments: 4,
            comments: []
        },
        footnote: {
            enabled: false
        },
        items: [
            {
                title: "Religious Burials",
                blocks: [
                    {
                        id: 11,
                        type: "paragraph",
                        content: [
                            {
                                type: "rich_text",
                                text: "Although the first instances of religious devotion is entirely conjectural, the earliest known intentional burials are found at the site of ",
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
                                text: " in Israel, going back roughly 100,000 years. These burials included tools and other artifacts placed in graves alongside the deceased, indicating a belief in the continuation of life after death.",
                                annotations: {
                                    bold: false,
                                    italic: false,
                                }
                            },
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
                                    bold: true,
                                    italic: false,
                                },
                            }
                        ]
                    },
                ]
            },
            {
                title: "Göbekli Tepe",
                blocks: [
                    {
                        id: 12,
                        type: "paragraph",
                        content: [
                            {
                                type: "rich_text",
                                text: "Göbekli Tepe, which was originally mistaken to be a cemetery, was re-excavated in 1993 and discovered to be one of the oldest religious ritual sites ever discovered. Described as a “Cathedral on a hill” by the excavator "
                            },
                            {
                                type: "rich_text",
                                text: "Klaus Schmidt"
                            },
                            {
                                type: "rich_text",
                                text: ", Göbekli Tepe contains over 20 circular stone enclosures, each containing monumental T-shaped limestone pillars weighing over 16 tons. Religious iconography remains etched into the pillars, with reliefs of animals in various different forms found throughout the site. At over 10,000 years old, this is the oldest of its kind ever discovered.",
                            }
                        ]
                    },
                    {
                        id: 25,
                        type: "image",
                        src: "https://picsum.photos/200/200",
                        content: []
                    },
                ]
            },
        ]
    },
    // {
    //     id: 5,
    //     type: "carousel",
    //     items: [
    //         {
    //             blocks: [
    //                 {
    //                     type: "image",
    //                     src: "https://picsum.photos/200/200",
    //                     content: [
    //                         {
    //                             type: "rich_text",
    //                             text: "This is a caption",
    //                             annotations: {
    //                                 bold: true,
    //                                 italic: false,
    //                             }
    //                         }
    //                     ]
    //                 },
    //             ]
    //         },
    //         {
    //             blocks: [
    //                 {
    //                     type: "image",
    //                     src: "https://picsum.photos/200/200",
    //                     content: [
    //                         {
    //                             type: "rich_text",
    //                             text: "This is a caption",
    //                             annotations: {
    //                                 bold: false,
    //                                 italic: true,
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             blocks: [
    //                 {
    //                     type: "image",
    //                     src: "https://picsum.photos/200/200",
    //                     content: [
    //                         {
    //                             type: "rich_text",
    //                             text: "This is a caption",
    //                             annotations: {
    //                                 bold: false,
    //                                 italic: false,
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 6,
        type: "paragraph",
        footnote: {
            enabled: true
        },
        content: [
            {
                type: "rich_text",
                text: "Due to this fundamental religious instinct, Homo Sapiens were able to form large and complicated social structures due to the shared beliefs made possible by the ",
                annotations: {
                    bold: false,
                    italic: false
                }
            },
            {
                type: "rich_text",
                text: "mythology, ethos,",
                annotations: {
                    italic: true
                }
            },
            {
                type: "rich_text",
                text: " and ",
                annotations: {
                    italic: false
                }
            },
            {
                type: "rich_text",
                text: "moral guidelines ",
                annotations: {
                    italic: true
                }
            },
            {
                type: "rich_text",
                text: "provided by religion. Whereas before the limit of our hunter-gatherer tribes was 150 people, religion acted as the cornerstone that made entire civilizations possible. This is explained in ",
                annotations: {}
            },
            {
                type: "rich_text",
                text: "Sapiens",
                annotations: {
                    italic: true
                }
            },
            {
                type: "rich_text",
                text: " by Yuval Noah Harari:",
                annotations: {
                    italic: false
                }
            },
        ]
    },
    {
        id: 20,
        type: "block_quote",
        social: {
            enabled: true,
            numComments: 12,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: `“Sociological research has shown that the maximum 'natural' size of a group bonded by gossip is about 150 individuals. Most people can neither intimately know, nor gossip effectively about more than 150 human beings. [...] How did Homo sapiens manage to cross this critical threshold, eventually founding cities comprising tens of thousands of inhabitants and empires ruling hundreds of millions? The secret was probably the appearance of fiction. Large numbers of strangers can cooperate successfully by believing in common myths.”`
            }
        ]
    },
    {
        id: 21,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "Common myth,",
                annotations: {
                    italic: true,
                }
            },
            {
                type: "rich_text",
                text: " as Harari explains, is what keeps our societies glued together beyond 150 humans. Although this is still true today, the common myths of today no longer include God as it once did.",
                annotations: {
                    italic: false,
                }
            },
        ]
    },
    {
        id: 22,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "For example, I was raised in Canada. Although Canada has some socialist leaning policies, it is largely capitalistic, embraces diversity/multiculturalism, and emphasizes equality and fairness. Coincidentally, I tend to embody these values in my work and free time. I aim to start my own business, enjoy meeting people from different countries, and see myself as an egalitarian. So long as my neighbour and I believe in a shared idea of Canada, our society will continue to function. This is however, ",
                annotations: {
                    italic: false,
                }
            },
            {
                type: "rich_text",
                text: "a common myth absent of God.",
                annotations: {
                    italic: true,
                }
            },

        ]
    },
    {
        id: 27,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "After the enlightenment, the West supplanted God with science and philosophy with the realization that “large and consistent moral theories could exist without reference to God” (1). Thereafter, humanity and many in the west began to look for meaning in other systems; this lead to the creation of communism, nazism, nationalism, and other governing ideologies as man searched for meaning in a world without a divine ruler. Fast-forward to 2024, the west finds itself in a world without religion, grappling with the existential task of defining our own values.",
                annotations: {
                    italic: false,
                }
            },

        ]
    },
    {
        id: 26,
        type: "image",
        src: "https://picsum.photos/200/200",
        content: [
            {
                type: "rich_text",
                text: "DALL-E 3 generated image: "
            },
            {
                type: "rich_text",
                text: "“Person feeling isolated in crowd, abstract, geometric, minimalistic, depressing”",
                annotations: {
                    italic: true
                }
            }
        ]
    },
    {
        id: 28,
        type: "h2",
        content: [
            {
                type: "rich_text",
                text: "The Beginning of Self-Help",
                annotations: {
                    bold: true,
                    italic: false
                }
            }
        ]
    },
    {
        id: 29,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 47,
            comments: [],
        },
        footnote: {
            enabled: true,
            title: "History of Self-Help",
            blocks: [
                {
                    id: 30,
                    type: "paragraph",
                    content: [
                        {
                            type: "rich_text",
                            text: "The first mainstream occurrence of the term “self help” was in 1859 (1). However, personal development has been a part of human literature for millennia (1). Although the concept isn’t new, the way we approach personal development has drastically changed in the age of the internet. Self-help gurus are ready to sell you their courses. Self-help advice floods our social media feeds. Beyond content, there exist thousands of apps, tools, websites, courses, online therapy, and other modalities ready to help you — and ready to take your money. The age of the internet has left us feeling inadequate, and with the feeling that there is yet more for us to do.",
                        }
                    ]
                }
            ]
        },
        content: [
            {
                type: "rich_text",
                text: "In the west, we have largely replaced Christian values with capitalist values. This is not at all a bad thing — capitalism has brought us tremendous benefits and has lowered baseline poverty all around the world (1). However, no system is perfect. Because we live in a world without God, capitalism’s laissez faire approach to the economy also obscures a more insidious agenda, which seeks to exploit and capitalize on our innate human need for improvement — something religion once provided. In the early days, “gurus” began teaching others how to become rich in deceptive “get rich quick” schemes. Pickup artists made their claim to fame by teaching depressed men how to emotionally manipulate women (Jordan Peterson classified this behaviour as psychopathic [get resource]). Gary Vaynerchuk popularized hustle culture, even advocating that people work 18 hour days (no, thanks). The list goes on: biohacking, digital minimalism, “Law of attraction” coaches and more. The once deification of our priests, prophets, and Gods alike gave way to the new era of influencers, aiming to help (and oftentimes exploit) a vast many people under the pre-tense of self-help."
            }
        ]
    },
    {
        id: 30,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "Although there are thousands of ways to help yourself and resolve your problems, most branches of internet self-help fail for one fundamental reason:"
            }
        ]
    },
    {
        id: 31,
        type: "center_quote",
        social: {
            enabled: true,
            numComments: 7,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: `"Internet self-help often focuses on changing behaviours, as opposed to providing insight into why we do the things we do."`,
                annotations: {
                    italic: true
                }
            }
        ]
    },
    {
        id: 32,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "As I will explain later, changing your behaviours is effortless once you have awareness of a problem and why it is occurring. This is why meditation and therapy is helpful; once someone understands why they’re behaving a certain way, making changes in their lives is easier because they have achieved clarity — the path forward becomes obvious."
            }
        ]
    },
    {
        id: 32,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        footnote: {
            enabled: false,
        },
        content: [
            {
                type: "rich_text",
                text: "Self help on the internet instead focuses on behaviour management. This treats the symptoms of our problems, not their root causes. This comes from a good place however; most of our problems are a result of our behaviours. If I’m up until 2AM at night consistently, and wake up with brain-fog every morning, I should go to bed earlier to solve the problem. Right?",
                annotations: {}
            }
        ]
    },
    {
        id: 32,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "Although this approach to problem solving makes sense at a surface level, it fails because it doesn’t address the root causes. Why am I up until 2AM? What am I doing this late? Is there something causing me to behave this way? Any advice we receive online will never answer these questions — this investigation must be done ourselves."
            }
        ]
    },
    {
        id: 32,
        type: "paragraph",
        social: {
            enabled: true,
            numComments: 0,
            comments: []
        },
        content: [
            {
                type: "rich_text",
                text: "A quick "
            },
            {
                type: "rich_text",
                text: "#advice",
                annotations: {
                    bold: true
                }
            },
            {
                type: "rich_text",
                text: " search on TikTok verifies this claim:",
                annotations: {}
            }
        ]
    },
    {
        id: 33,
        type: "carousel",
        social: {
            enabled: false,
            comments: 0,
            numComments: []
        },
        items: [
            {
                blocks: [
                    {
                        type: "embed",
                        src: `<blockquote class=\"tiktok-embed\" cite=\"https://www.tiktok.com/@ghostofascension/video/7307953512850164993\" data-video-id=\"7307953512850164993\" data-embed-from=\"embed_page\" style=\"max-width:605px; min-width:325px;\"> <section> <a target=\"_blank\" title=\"@ghostofascension\" href=\"https://www.tiktok.com/@ghostofascension?refer=embed\">@ghostofascension</a> <p>Believe in yourself <a title=\"motivation\" target=\"_blank\" href=\"https://www.tiktok.com/tag/motivation?refer=embed\">#motivation</a> <a title=\"ghost\" target=\"_blank\" href=\"https://www.tiktok.com/tag/ghost?refer=embed\">#ghost</a> </p> <a target=\"_blank\" title=\"♬ original sound - Ghostofascension\" href=\"https://www.tiktok.com/music/original-sound-7307953565128002305?refer=embed\">♬ original sound - Ghostofascension</a> </section> </blockquote> <script async src=\"https://www.tiktok.com/embed.js\"></script>`,
                    },
                    {
                        type: "embed",
                        src: "https://www.tiktok.com/@mattkomo/video/7020136740404573446",
                    }
                ]
            }
        ]
    }
];
