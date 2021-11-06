import React from 'react';

import PokemonListEntry from './PokemonListEntry';

const PokemonList = ({ team }) => (
  <div id="pokemon-list">
    <h2>Your Team</h2>
    {team.map(pokemon =>
      <PokemonListEntry
        key={pokemon.id}
        pokemon={pokemon}
      />
    )}
  </div>
)

export default PokemonList;