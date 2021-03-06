import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

import Header from './Header';
import AddPokemon from './AddPokemon';
import TypeCoverage from './TypeCoverage'
import PokemonList from './PokemonList';

const App = function() {
  const [team, setTeam] = useState([]);
  const [types, setTypes] = useState([]);
  const [allTypes, setAllTypes] = useState({
    'Normal': false, 'Fire': false, 'Water': false,
    'Grass': false, 'Electric': false, 'Ice': false,
    'Fighting': false, 'Poison': false, 'Ground': false,
    'Flying': false, 'Psychic': false, 'Bug': false,
    'Rock': false, 'Ghost': false, 'Dark': false,
    'Dragon':false, 'Steel': false, 'Fairy': false
  })

  const onAddPokemonSubmit = (pokemon) => {
    let name = pokemon.toLowerCase();
    axios.get(`/API/v2/pokemon`, {params: {name: name}})
      .then(result => {
        setTeam([...team, result.data]);
        let newTypes = [];
        for (let i = 0; i < result.data.types.length; i++) {
          let type = result.data.types[i].type.name;
          if (!types.includes(type)) {
            newTypes.push(type);
          }
          setTypes([...types, ...newTypes]);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <Header />
      <div id='main'>
        <div>
          <AddPokemon onSubmit={onAddPokemonSubmit} />
          <TypeCoverage types={types} allTypes={allTypes}/>
        </div>
        <PokemonList team={team}/>
      </div>
    </div>
  )
}

export default App;