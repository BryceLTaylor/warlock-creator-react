import React from 'react';
import './stat.css';

const Stat = (props) => (
    <div
        className='stat'
    >
        <p
            className = 'stat-value'
        >
            {props.statValue}
        </p>
        <p
            className = 'stat-name'
        >
            {props.statName}
        </p>
    </div>
);

export default Stat;