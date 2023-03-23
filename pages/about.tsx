
import { useTina } from "tinacms/dist/react";
import { client } from "../.tina/__generated__/client";
import DynamicComponent from "../components/blocks-renderer";


function AboutPage(props) {
    const { data } = useTina({
        query     : props.query,
        variables : props.variables,
        data      : props.data,
    })

    // data-tinafield only experimental not use in production
    return <div>
        <h1 data-tinafield="title">{data.page?.title}</h1>
        <DynamicComponent sections={data.page?.sections}/>
    </div>

}

export default AboutPage


export const getStaticProps = async () => {
    const { data, query, variables } = await client.queries.page({
        relativePath: "about.json",
    });

    return {
        props: {
            data,
            query,
            variables,
        },
    }
}