import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from './CustomCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getCharacters() {
      let res = await axios.get('https://rickandmortyapi.com/api/character/');
      setCharacters(res.data.results);
    }
    getCharacters();
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map(character => (
        <CustomCard header={character.name} meta={character.status} desc={character.origin.name} image={character.image} />
      ))}
    </section>
  );

}
