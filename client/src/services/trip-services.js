import axios from 'axios';
import fire from '../firebase/firebase.utils';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const url = 'http://localhost:8080/v1/trips';

// axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     return Promise.reject(error);
// });

const createToken = async () => {
    const user = getAuth().currentUser;
    const token = user && (await user.getIdToken());

    const payloadHeader = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };

    return payloadHeader;
}

export const addTrip = async ({tripName, tripVolume, tripBoat, tripDate}) => {
    const header = await createToken();

    const payload = {
        tripName,
        tripVolume,
        tripBoat,
        tripDate,
    }

    try {
        const res = await axios.post(url, payload, header);
        alert('Added your Trip!')
        window.location.reload();
        return res.data;   

    } catch (error) {
        console.error(error);
    }
};

export const getUserTrips = async () => {
    const header = await createToken();

    try {
        const res = await axios.get(url, header);
        return res.data; 
    } catch (error) {
        console.error(error);
    }
}

