import React from 'react';
import { socialMedia } from '../../../DataStore/portfolioData';

import { Icon, IconButton } from '@material-ui/core';

const SocialMedia = () => {
    return (
        <div>
            {socialMedia.map((icon, index) => (
                <IconButton
                    style={{padding: "5px"}}
                    aria-label="icon"
                    key={icon.id}
                    href={icon.href}
                    target="_"
                >{icon.icon}</IconButton>
            ))}
        </div>
    )
}

export default SocialMedia;
