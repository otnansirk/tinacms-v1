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
        NEXT_TINA_BRANCH: process.env.NEXT_TINA_BRANCH,
        NEXT_TINA_TOKEN: process.env.NEXT_TINA_TOKEN,
        NEXT_TINA_ID: process.env.NEXT_TINA_ID,
        NEXT_MONGO_URI: process.env.NEXT_MONGO_URI,

        GITHUB_OWNER: process.env.NEXT_GITHUB_OWNER,
        GITHUB_REPO: process.env.NEXT_GITHUB_REPO,
        GITHUB_BRANCH: process.env.NEXT_GITHUB_BRANCH,
        GITHUB_PERSONAL_ACCESS_TOKEN: process.env.NEXT_GITHUB_PERSONAL_ACCESS_TOKEN,
        TINA_PUBLIC_IS_LOCAL: process.env.NEXT_TINA_PUBLIC_IS_LOCAL,
        PUBLIC_TINA_CLIENT_ID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    },
    "jsx": "react-jsx"
}