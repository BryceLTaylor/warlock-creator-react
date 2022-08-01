import React from 'react';
import './InfoPanel.css';
import StatPreference from '../statPreference/StatPreference.js';

const InfoPanel = (props) => {
    return(
    <div
        className = 'info-panel'
        id = 'info-panel'
    > 
        <h1 className='info-panel-title'>Info Panel</h1>
        <button
            onClick={() => props.reorderStats() }
        >
            Update Stats
        </button>
        <button
            onClick={() => props.rollStats() }
        >
            Reroll Stats
        </button>
        <div
            className = 'stat-preferences'
        >
            {props.preferenceOrder.map((stat) => (

                <StatPreference
                    statName={stat}
                    order={props.preferenceOrder.indexOf(stat)}
                    key={stat}
                    changeStatPriority={props.changeStatPriority}
                />
            ))}
        </div>
    </div>
    )
}

export default InfoPanel;
