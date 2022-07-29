import React from 'react';
import './Warlock.css';

const Warlock = (props) => (
    <div
        className = 'warlockInfo'
        id = 'warlockInfo'
    >
        <p>Info for the generated warlock</p>
        <h1 className='warlockName'>{props.name}</h1>
        <div className='statContainer'>

        </div>
    </div>
);

export default Warlock;