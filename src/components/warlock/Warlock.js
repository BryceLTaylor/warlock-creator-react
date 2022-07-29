import React from 'react';
import './Warlock.css';
import Stat from '../stat/stat.js';

const Warlock = (props) => (
    <div
        className = 'warlock-info'
        id = 'warlockInfo'
    >
        <p>Info for the generated warlock</p>
        <h1 className='warlockName'>{props.name}</h1>
        <div className='stat-container'>
            {props.statNames.map((name, index) => (
                <Stat
                    statName={name}
                    statValue={props.statValues[index]}
                    key={name}
                />
            )
                
            )}

        </div>
    </div>
);

export default Warlock;