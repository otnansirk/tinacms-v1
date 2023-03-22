import { defineSchema, defineConfig } from 'tinacms'

const schema = defineSchema({
    collections: [
        {
            label: "Pages",
            name: "page",
            path: "contents/page",
            format: "md",
            // use this /~/about to edit about page
            // ui: {
            // router: ({ document }) => {
            // if (document._sys.filename === 'home') {
            //     return `/`
            // }
            // if (document._sys.filename === 'about') {
            //     return `/about`
            // }
            // return undefined
            // },
            // },
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
                                category: 'Sections',
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
                                category: 'Sections',
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
                                        colorFormat: 'rgb'
                                    }
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