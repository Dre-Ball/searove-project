const loads = new Map();

let latestLoadNumber = 100;

const load = {
    loadNumber: 100,
    volume: 5,
    content: 'electronics',
    customer: ['Best Buy', 'Gamestop'],
    createdDate: new Date('2022-09-01')
};

loads.set(loads.flightNumber, load);


function getAllLoads() {
    return Array.from(loads.values());
};

function addNewLoad(load) {
    latestLoadNumber ++;
    loads.set(
        latestLoadNumber, 
        Object.assign(load, {
            customers: ['Best Buy', 'Gamestop'],
            loadNumber: latestLoadNumber,
        })
    );
};

module.exports = {
    getAllLoads,
    addNewLoad,
};