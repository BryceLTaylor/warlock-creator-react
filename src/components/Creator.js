import React from 'react';
import Warlock from './Warlock.js';
import InfoPanel from './infoPanel.js';

const Creator = (props) => (
    <div
        className = 'creator'
        id = 'creator'
    >
        <Warlock />
        <InfoPanel />
    </div>
)

export default Creator;