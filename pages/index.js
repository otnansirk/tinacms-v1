
import { useTina } from "tinacms/dist/react";
import { client } from "../.tina/__generated__/client";
import DynamicComponent from "../components/DynamicComponent.js";

function HomePage(props) {
const { data, loading } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
})

    return <div>
        <h1>{loading ? 'Loading...' : data.page.title}</h1>
        <DynamicComponent sections={data.page?.sections}/>
    </div>
}

export default HomePage


export const getStaticProps = async () => {
    const { data, query, variables } = await client.queries.page({
        relativePath: "home.json",
    });

    return {
        props: {
            data,
            query,
            variables,
        },
    }
}