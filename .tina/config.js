import { defineSchema, defineConfig } from 'tinacms'

const schema = defineSchema({
    collections: [
        {
            label: "Pages",
            name: "page",
            path: "contents/page",
            format: "md",
            ui: {
                router: ({ document }) => {
                    if (document._sys.filename === 'home') {
                        return `/`
                    }
                    if (document._sys.filename === 'about') {
                        return `/about`
                    }
                    return undefined
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
                    templates: [
                        {
                            name: 'benefit',
                            label: 'Benefit',
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
                            fields: [
                                {
                                    label: "Title",
                                    name: "title",
                                    type: "string"
                                }
                            ],
                        },
                    ]
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
    build: {
        publicFolder: "public", // The public asset folder for your framework
        outputFolder: "admin", // within the public folder
    },
    schema
})


export default config