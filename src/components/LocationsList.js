import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from './CustomCard';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            let res = await axios.get('https://rickandmortyapi.com/api/location/');
            setLocations(res.data.results);
        }
        getCharacters();
    }, [])
    return (
        <section className='location-list grid-view'>
            {locations.map(location => (
                <CustomCard header={location.name} meta={location.type} desc={location.dimension} />
            ))}
        </section>
    );
}
