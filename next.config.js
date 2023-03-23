module.exports = {
    async rewrites() {
        return [
            {
                source: '/admin',
                destination: '/admin/index.html',
            },
        ]
    },
    "jsx": "react-jsx"
}