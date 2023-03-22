import PageSectionsBenefit from "./benefit/Benefit";
import PageSectionsMarketing from "./marketing/Marketing";

const sectionBlock = {
    PageSectionsBenefit,
    PageSectionsMarketing
}

function DynamicComponent(props) {
    const { sections }  = props;
    if (!sections) {
        return <></>;
    }

    const blocks = sections.map((section) => {
        const Component =  sectionBlock[section?.__typename];
        return <Component {...section} key={section?.__typename}/>
    })

    return blocks;
}

export default DynamicComponent;