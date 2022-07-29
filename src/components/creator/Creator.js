import React, { useEffect } from 'react';
import Warlock from '../warlock/Warlock.js';
import InfoPanel from '../infoPanel/InfoPanel.js';
import './Creator.css';
import {getRandomName, defaultOrder } from '../../warlockCreate.js';

const Creator = (props) => {
    const [statPreferenceOrder, setPreferenceOrder] = React.useState(defaultOrder);
    const [warlockName, setWarlockName] = React.useState('');
    
    function changeStatPriority (stat, direction) {
        let tempPriorityList = statPreferenceOrder;
        let currentIndex = tempPriorityList.indexOf(stat);
        console.log("changing priority");

        if (currentIndex > 0 && direction === 'raise') {
            tempPriorityList[currentIndex] = tempPriorityList[currentIndex - 1];
            tempPriorityList[currentIndex - 1] = stat;
        }
        if (currentIndex < tempPriorityList.length - 1 && direction === 'lower') {
            tempPriorityList[currentIndex] = tempPriorityList[currentIndex + 1];
            tempPriorityList[currentIndex + 1] = stat;
        }
        setPreferenceOrder([...tempPriorityList]);
        console.log(statPreferenceOrder);
    }
    
    useEffect( () => {
        setWarlockName(getRandomName());
    }, []);

    return (
    <div
        className = 'creator'
        id = 'creator'
    >        
        <Warlock 
            name={warlockName}
        />
        <InfoPanel 
            preferenceOrder={statPreferenceOrder}
            changeStatPriority={changeStatPriority}

        />
    </div>
)}

export default Creator;
