import { ReactElement } from 'react';

import './index.css';


interface DocBoxProps {
    icon: ReactElement;
    title: string;
    description: string;
    link: string;
};

export const DocBox = ({ icon, title, description, link }: DocBoxProps): ReactElement => {
    return <div className='doc-box' onClick={() => window.location.href = link}>
        <div className='doc-box-icon'>{ icon }</div>
        <h4>{ title }</h4>
        <p>{ description }</p>
    </div>
};