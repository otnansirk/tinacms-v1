function PageSectionsMarketing(props) {
    const {
        title,
        background,
        __typename
    } = props;

    return <div id={__typename} style={{background, padding: '10px'}}>
        <h4>{title}</h4>
    </div>
}

export default PageSectionsMarketing;