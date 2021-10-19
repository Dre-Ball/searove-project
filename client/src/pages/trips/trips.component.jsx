import React from 'react';
import DataTable from 'react-data-table-component';

import './trips.styles.scss';


const columns = [
    {
        name: 'Trip',
        selector: row => row.trip,
    },
    {
        name: 'Boat',
        selector: row => row.boat,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
];

const data = [
    {
        id: 1,
        trip: 'business',
        boat: 'catamaran',
        date: '10/31/2021',
    },
];

const TripsPage = () => {
    return (
        <DataTable 
            columns={columns}
            data={data}
        />
    )
};

export default TripsPage;