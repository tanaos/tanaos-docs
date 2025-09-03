import { ReactElement } from 'react';

import './index.css';


enum InfoBoxTypes {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info'
};

interface InfoBoxProps {
    type: InfoBoxTypes;
    children: ReactElement | ReactElement[];
};

const InfoBoxTitle = ({ type }: { type: InfoBoxTypes }): ReactElement => {
    switch (type) {
        case InfoBoxTypes.SUCCESS:
            return <><i className="bi bi-lightbulb"></i> Tip</>;
        case InfoBoxTypes.DANGER:
            return <><i className="bi bi-exclamation-octagon"></i> Caution</>;
        case InfoBoxTypes.WARNING:
            return <><i className="bi bi-exclamation-triangle"></i> Warning</>;
        case InfoBoxTypes.INFO:
            return <> <i className="bi bi-info-circle"></i>Info</>;
        default:
            return <><i className="bi bi-info-circle"></i>Info</>;
    }
};

export const InfoBox = ({ type, children }: InfoBoxProps): ReactElement => {
    return <div className={`info-box info-box-${type}`}>
        <div className='info-box-title'>
            <InfoBoxTitle type={type} />
        </div>
        <div className='info-box-content'>
            {children}
        </div>
    </div>
};

export default InfoBox;