import React from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';

import './index.css'


type Props = {
    to: string;
    label: string;
    showOnRoutes?: string[];
    [key: string]: any;
};

export const ConditionalNavbarItem = ({ to, label, showOnRoutes = [], ...props }: Props) => {
    const { pathname } = useLocation();
    const shouldShow = showOnRoutes.length === 0 || showOnRoutes.some(route => pathname.startsWith(route));

    if (!shouldShow) return null;

    return <>
		<span className='custom-navbar-item emdash'>—</span>
		<Link className="custom-navbar-item doc-title" to={to} {...props}>
			{label}
		</Link>
    </>;
}

export const NavbarTitle = () => {
    return <a className='custom-navbar-item doc-logo' href='/'><span className='highlighted'>Tanaos</span> docs</a>
};