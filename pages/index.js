import { useTina } from 'tinacms/dist/react'

function HomePage(props) {

    const { data, loading } = useTina({
        // query: props.query,
        // variables: props.variables,
        data: props.data,
    })

    return <div>
        <h1>{loading ? 'Loading...' : data.title}</h1>
    </div>
}

export default HomePage


export const getStaticProps = async () => {
    // const pageResponse = await client.queries.page({ relativePath: 'home.mdx' })

    return {
        props: {
            data: {title: "KRIS N"},
            // query: pageResponse.query,
            // variables: pageResponse.variables,
        },
    }
}