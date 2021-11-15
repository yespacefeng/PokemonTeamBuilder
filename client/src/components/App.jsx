import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/App.css';

import Header from './Header';
import AddPokemon from './AddPokemon';
import PokemonList from './PokemonList';

const App = function() {
  const [team, setTeam] = useState([]);

  const onAddPokemonSubmit = (pokemon) => {
    let name = pokemon.toLowerCase();
    axios.get(`/API/v2/pokemon`, {params: {name: name}})
      .then(result => {
        setTeam([...team, result.data]);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      <Header />
      <div id='main'>
        <AddPokemon onSubmit={onAddPokemonSubmit} />
        <PokemonList team={team}/>
      </div>
    </div>
  )
}

export default App;