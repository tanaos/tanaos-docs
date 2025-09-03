import { ReactElement } from 'react';

import Badge, { BadgeTypes } from '../Badge';


interface ParameterTypeBadgeProps {
    children: string;
};

interface DefaultParameterBadgeProps {
    value: string;
};


export const ParameterTypeBadge = ({ children }: ParameterTypeBadgeProps): ReactElement => {
    return <Badge type={BadgeTypes.INFO}>
        { children }
    </Badge>
};

export const OptionalParameterBadge = (): ReactElement => {
    return <Badge type={BadgeTypes.WARNING}>
        optional
    </Badge>
};

export const DefaultParameterBadge = ({ value }: DefaultParameterBadgeProps): ReactElement => {
    return <Badge type={BadgeTypes.SUCCESS}>
        <>default: {value}</>
    </Badge>
};

export const NullableParameterBadge = (): ReactElement => {
    return <Badge type={BadgeTypes.DANGER}>
        nullable
    </Badge>
};