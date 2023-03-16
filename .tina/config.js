import { defineSchema, defineConfig } from 'tinacms'

const schema = defineSchema({
    collections: [{
        label: "Post",
        name: "post",
        path: "posts",
        ui: {
            router: ({ document }) => {
                if (document._sys.filename === 'hello-word') {
                    return `/`
                }
                return undefined
            },
        },
        fields: [{
            label: "Title",
            name: "title",
            type: "string"
        }]
    }]
})

const config = defineConfig({
    build: {
        publicFolder: "public", // The public asset folder for your framework
        outputFolder: "admin", // within the public folder
    },
    schema
})

export default config