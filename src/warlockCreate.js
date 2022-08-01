import options from './data/warlockOptions.json';

// let statNamesLong = ['Strength', 'Dexterity', 'Constitution','Intelligence', 'Wisdom', 'Charisma'];
// let statNames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
let statNames = options.statNames;
let statNamesLong = options.statNamesLong;
let defaultOrder = options.defaultOrder;

// let defaultOrder = ['cha', 'dex', 'con', 'wis', 'int', 'str'];

async function getOptions () {
    let warlockOptions = await fetch('data/warlockOptions.json');
    options = warlockOptions.json();
    console.log(options);
}

function rollStat () {
    let numbers = [];
    for (let i = 0; i<4; i++) {
        numbers.push(Math.floor( Math.random() * 6 ) + 1);
    }
    numbers.sort((a,b) => a - b );
    return numbers[1] + numbers[2] + numbers[3];
}

function getRandomName () {
    let namesList = options.level1.name;
    let elementNumber = Math.floor(Math.random() * namesList.length);
    return namesList[elementNumber];
}

function rollAllStats (statPreferences) {
    let statValues = [];
    let stats = [];
    for (let i = 0; i < statNames.length; i++){
        statValues.push(rollStat() );
        stats.push(0);
    }
    stats = orderStats(statValues, statPreferences);
    return stats;
}

function orderStats (stats, statPreferences) {
    stats.sort((a,b) => b - a);
    let valueIndex;
    let tempStats = [...stats];

    for (let i = 0; i < statNames.length; i++) {
        valueIndex = statPreferences.indexOf(statNames[i]);
        tempStats[i] = stats[valueIndex];
    }
    return tempStats;
}
// getOptions();
// console.log(getRandomName());

export {
    rollStat,
    getRandomName,
    getOptions,
    orderStats,
    rollAllStats,
    statNames,
    statNamesLong,
    defaultOrder
}