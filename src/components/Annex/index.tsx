import { ReactElement } from 'react'

import './index.css'


interface AnnexProps {
    children: ReactElement,
    title: string
};

// A component which serves as a container for additional information or notes related to the 
// main content, typically a table or a JSON object.
export const Annex = ({ children, title }: AnnexProps): ReactElement => {
    return <div className='annex-container'>
        <div className='annex-header'>
            { title }
        </div>
        <div className='annex'>
            {children}
        </div>
    </div>
};