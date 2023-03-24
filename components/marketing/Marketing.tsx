function PageSectionsMarketing(props) {
    const {
        title,
        background,
        image,
        __typename
    } = props;

    return <div id={__typename} style={{background, padding: '10px'}}>
        <h4>{title}</h4>
        {
            image &&
                <img src={image} alt="image" width="50%"/>
        }
    </div>
}

export default PageSectionsMarketing;