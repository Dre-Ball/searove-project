import React, { useEffect, useState } from 'react';

<<<<<<< HEAD:client/src/components/trips-table/trips-table.component.jsx
import './trips-table.styles.scss';
=======
>>>>>>> df8d43e22b4fea6c179a438aa5c783cd5cf03eb6:client/src/components/trip-table/trip-table.component.jsx
import { addTrip, getUserTrips } from '../../services/trip-services';
import CustomButton from '../custom-button/custom-button.component';

import './trips-table.styles.scss';


const TripsTable = () => {

    //const [ trips, setTrips ] = useState(data);
    const [ addFormData, setAddFormData ] = useState ({
        tripName: '',
        tripVolume: '',
        tripBoat: '',
        tripDate: '',
    });

    const handleChange = (event) => {
        event.preventDefault();

        const name = event.target.getAttribute('name');
        const value = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[name] = value;

        setAddFormData(newFormData);
    };

    const handleSubmit = ((event) => {
        event.preventDefault();

        const newTrip = {
            tripName: addFormData.tripName,
            tripVolume: addFormData.tripVolume,
            tripBoat: addFormData.tripBoat,
            tripDate: addFormData.tripDate,
        };

        if (newTrip) {
            console.log(newTrip);
            addTrip(newTrip);
        }

        // const newTrips = [...trips, newTrip];
        // setTrips(newTrips)
    });

    // const handleDeleteClick = (tripId) => {
    //     const newTrips = [ ...trips ];

    //     const index = trips.findIndex((trip) => trip.id === tripId);

    //     newTrips.splice(index, 1);

    //     setTrips(newTrips);
    // }
    
    const [entries, setEntries] = useState();

    useEffect( () => {
        const fetchEntries = async () => {
            const fetchedEntries = await getUserTrips();
            setEntries(fetchedEntries)
        }
        fetchEntries();
    }, [])

    if (entries === undefined) {
        return null;
    }
    
    return( 
        <div>
            <div className="app-container">
                <table>
                    <thead>
                        <tr>
                            <th>Trip Name</th>
                            <th>Boat</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => (
                        <tr>
                            <td>{entry.tripName}</td>
                            <td>{entry.tripBoat}</td>
                            <td>{entry.tripDate}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Add a Trip</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        name="tripName"
                        type="text"
                        onChange={handleChange}
                        placeholder="Trip Name"
                        required />
                    <input 
                        name="tripVolume"
                        type="number"
                        onChange={handleChange}
                        placeholder="Trip Volume"
                        required />
                    <input
                        name="tripBoat"
                        type="text"
                        onChange={handleChange}
                        placeholder="Trip Boat"
                        required />
                    <input
                        name="tripDate"
                        type="date"
                        onChange={handleChange}
                        placeholder="Trip Date"
                        required />

                    <div>
                        <CustomButton type="submit">Add Trip</CustomButton>
                    </div>
                </form>
            </div>
        </div>
)};

export default TripsTable;