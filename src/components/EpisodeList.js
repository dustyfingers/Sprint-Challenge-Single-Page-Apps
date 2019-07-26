import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from './CustomCard';

const EpisodeList = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        async function getCharacters() {
            let res = await axios.get('https://rickandmortyapi.com/api/episode/');
            setEpisodes(res.data.results);
        }
        getCharacters();
    }, [])
    return (
        <section className='episode-list grid-view'>
            {episodes.map(episode => (
                <CustomCard header={episode.name} meta={episode.air_date} desc={episode.episode} />
            ))}
        </section>
    )
}

export default EpisodeList;
