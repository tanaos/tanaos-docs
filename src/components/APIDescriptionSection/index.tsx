import { ReactElement } from 'react';

import './index.css';


interface APIDescriptionSectionProps {
    title: string;
    children: ReactElement | ReactElement[];
}

// Any one of the sections of the API description, e.g: "Path Parameters", "Query Parameters", "Response", etc.
export const APIDescriptionSection = (
    { title, children }: APIDescriptionSectionProps
): ReactElement => {
    return <div className='api-description-section'>
        <h4>{title}</h4>
        <hr />
        {children}
    </div>
};

export default APIDescriptionSection;