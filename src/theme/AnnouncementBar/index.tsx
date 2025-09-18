import React from 'react';
import './index.css';

import { ARTIFEX_GITHUB_URL } from '../../../consts';


export const AnnouncementBar = () => {
    return (
        <div
            className="announcement-bar"
        >
            Do you like Artifex? Give it a ⭐ <a 
                href={ARTIFEX_GITHUB_URL} 
                target='_blank' 
                rel='noopener'
            >star on GitHub!</a>
        </div>
    );
}

export default AnnouncementBar;