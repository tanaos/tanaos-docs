import { ReactElement } from 'react';

import './index.css';


export enum BadgeTypes {
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info'
};

interface BadgeProps {
    type: BadgeTypes;
    children: ReactElement | ReactElement[] | string | number;
};

export const Badge = ({ type, children }: BadgeProps): ReactElement => {
    return <div className={`badge badge-${type}`}>
        {children}
    </div>
};

export default Badge;