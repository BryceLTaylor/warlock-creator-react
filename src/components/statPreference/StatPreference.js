import React from 'react';
import './StatPreference.css';

const StatPreference = (props) => {
    
return (
    <div
        className = 'preference-container'
    >
        <div >
            <p className='preference-order'>{props.order + 1}</p>
        </div>
        <div className='stat-name'>
            <p>{props.statName}</p>
        </div>
        <div className='buttons-container'>
            <button
                onClick={() => props.changeStatPriority(props.statName, 'raise')}
            > 
                ^ 
            </button>
            <button
                onClick={() => props.changeStatPriority(props.statName, 'lower')}
            > 
                v 
            </button>
        </div>
        
    </div>
)};

export default StatPreference;