import React from 'react';
import DataTable from 'react-data-table-component';

import './trips.styles.scss';


const columns = [];

const data = [];

const TripsPage = () => {
    return (
        <DataTable 
            columns={columns}
            data={data}
        />
    );
};

export default TripsPage;