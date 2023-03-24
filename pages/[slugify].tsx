import { useTina } from "tinacms/dist/react";
import Blocks from "../components/blocks-renderer";
import { client } from "../.tina/__generated__/client";
// import { dbConnection } from "../lib/databaseConnection";

function RootPage(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    return <div>
        <h1>{data?.page?.title}</h1>
        <Blocks sections={data.page?.sections} />
    </div>
}

export default RootPage


export const getStaticProps = async ({ params }) => {
    const { data, query, variables } = await client.queries.page({
        relativePath: `${params.slugify}.json`,
    });

    return {
        props: {
            data,
            query,
            variables,
        },
    }
}

export const getStaticPaths = async () => {
    const pagesListData = await client.queries.pageConnection();

    return {
        paths: pagesListData.data.pageConnection.edges.map((page) => {
            return {
                params: { slugify: page.node._sys.filename },
            }
        }),
        fallback: false,
    };
};