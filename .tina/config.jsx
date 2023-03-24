import React from 'react';
import { defineSchema, defineConfig, wrapFieldsWithMeta } from 'tinacms'

const schema = defineSchema({
    admin: {
        auth: {
            useLocalAuth: true
        }
    },
    collections: [
        {
            label: "Pages",
            name: "page",
            path: "contents/page",
            format: "json",
            ui: {
                router: ({ document }) => {
                    return document._sys.filename
                },
            },
            fields: [
                {
                    label: "Title",
                    name: "title",
                    type: "string"
                },
                {
                    label: "Description",
                    name: "description",
                    type: "string"
                },
                {
                    label: 'Contact Info',
                    name: 'contact',
                    type: "object",
                    fields: [
                        {
                            label: 'Email',
                            name: 'email',
                            type: 'string',
                        }
                    ],
                },
                {
                    label: 'Sections',
                    name: 'sections',
                    type: "object",
                    list: true,
                    ui: {
                        visualSelector: true
                    },
                    templates: [
                        {
                            name: 'benefit',
                            label: 'Benefit',
                            ui: {
                                previewSrc: 'https://tinyjpg.com/images/social/website.jpg'
                            },
                            fields: [
                                {
                                    label: "Title",
                                    name: "title",
                                    type: "string"
                                }
                            ],
                        },
                        {
                            name: 'marketing',
                            label: 'Marketing',
                            category: 'Sections',
                            ui: {
                                previewSrc: 'https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg'
                            },
                            fields: [
                                {
                                    label: "Title",
                                    name: "title",
                                    type: "string"
                                },
                                {
                                    label: "Background",
                                    name: "background",
                                    type: "string",
                                    description: "My custom background field",
                                    ui: {
                                        component: 'color',
                                    }
                                },
                                {
                                    label: "Image",
                                    name: "image",
                                    type: "image",
                                    description: "Image selected"
                                },
                                {
                                    label: "Custom Input",
                                    name: "custom",
                                    type: "string",
                                    ui: {
                                        component: wrapFieldsWithMeta(({ form, input }) => {
                                            return (
                                                <div>
                                                    <input className='shadow-inner focus:shadow-outline focus:border-blue-500 focus:outline-none block text-base placeholder:text-gray-300 px-3 py-2 text-gray-600 w-full bg-white border border-gray-200 transition-all ease-out duration-150 focus:text-gray-900 rounded-md'></input>
                                                </div>
                                            )
                                        })
                                    }
                                }
                            ],
                        },
                    ]
                }
            ]
        },
        {
            label: "Global",
            name: "global",
            path: "contents/global",
            format: "json",
            ui: {
                global: true,
            },
            fields: [
                {
                    type: "object",
                    label: "Header",
                    name: "header",
                    fields: [
                        {
                            type: "object",
                            label: "Menu",
                            name: "menu",
                            list: true,
                            templates: [
                                {
                                    type: "string",
                                    name: "links",
                                    label: "Links",
                                    ui : {
                                        itemProps: (item) => ({
                                            label: item?.label
                                        })
                                    },
                                    fields: [
                                        {
                                            type: "string",
                                            name: "label",
                                            label: "Label",
                                        },
                                        {
                                            type: "string",
                                            name: "url",
                                            label: "URL",
                                        }
                                    ]
                                }
                            ],
                        },
                    ],
                },
                {
                    type: "object",
                    label: "Themes",
                    name: "themes",
                    fields: [
                        {
                            type: "string",
                            name: "theme",
                            label: "Theme",
                            options: [
                                {
                                    label: "default",
                                    value: "Default",
                                },
                                {
                                    label: "Business",
                                    value: "business",
                                },
                                {
                                    label: "Sport",
                                    value: "sport",
                                },
                            ],
                        },
                    ]
                }
            ]
        },
        {
            label: "Media Manager",
            name: "mediaManager",
            path: "contents/media",
            format: "json",
            ui: {
                global: true,
            },
            fields: [
                {
                    label: "Title",
                    name: "title",
                    type: "string"
                }
            ]
        }
    ]
})

export const HeaderBlock = {
    label: 'Header',
    key: 'header-block',
    defaultItem: {
        content: '',
    },
    fields: [
        {
            label: 'Content',
            name: 'content',
            type: 'string'
        }
    ]
}

const config = defineConfig({
    token: process.env.NEXT_TINA_TOKEN,
    clientId: process.env.NEXT_TINA_ID,
    branch: process.env.NEXT_TINA_BRANCH,
    build: {
        publicFolder: "public", // The public asset folder for your framework
        outputFolder: "admin", // within the public folder
    },
    schema,
    media: {
        // If you wanted cloudinary do this
        // loadCustomStore: async () => {
        //   const pack = await import("next-tinacms-cloudinary");
        //   return pack.TinaCloudCloudinaryMediaStore;
        // },
        // this is the config for the tina cloud media store
        tina: {
            publicFolder: "public",
            mediaRoot: "uploads",
        },
    }
})


export default config