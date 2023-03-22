function PageSectionsMarketing(props) {
    const {
        title,
        __typename
    } = props;

    return <div id={__typename}>
        <h4>{title}</h4>
    </div>
}

export default PageSectionsMarketing;