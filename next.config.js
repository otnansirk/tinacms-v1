module.exports = {
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ]
    },
    env: {
        NEXT_TINA_BRANCH : process.env.NEXT_TINA_BRANCH,
        NEXT_TINA_TOKEN : process.env.NEXT_TINA_TOKEN,
        NEXT_TINA_ID : process.env.NEXT_TINA_ID
    },
    "jsx": "react-jsx"
}