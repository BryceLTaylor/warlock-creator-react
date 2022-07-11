import React from 'react';
import Warlock from '../warlock/Warlock.js';
import InfoPanel from '../infoPanel/InfoPanel.js';

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