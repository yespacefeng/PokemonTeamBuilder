import React from 'react';
import './styles/PokemonListEntry.css';

const PokemonListEntry = ({ pokemon }) => (
  <div className="pokemon-list-entry">
    <div className='top'>
      <div className='info'>
        <h4 className='name'>{pokemon.name[0].  toUpperCase () + pokemon.name.slice(1)}</h4>
        <select className="ability">
          {pokemon.abilities.map(ability => (
            <option key={ability.slot} value= {ability.  ability.name}>{ability.ability. name}</option>
          ))}
        </select>
      </div>
      <div className='sprites'>
        <div className='male'>
          <h5 className='gender'>Male</h5>
          <img src={pokemon.sprites.front_default}  alt='male sprite'/>
        </div>
        <div className='female'>
          <h5 className='gender'>Female</h5>
          <img src={pokemon.sprites.front_female ===  null ? pokemon.sprites.front_default : pokemon.  sprites.front_female} alt='male sprite'/>
        </div>
      </div>
      <div className='stats'>
        <h5>HP: {pokemon.stats[0].base_stat}</h5>
        <h5>Attack: {pokemon.stats[1].base_stat}</h5>
        <h5>Defense: {pokemon.stats[2].base_stat}</h5>
        <h5>Sp. Attack: {pokemon.stats[3].base_stat}</h5>
        <h5>Ap. Defense: {pokemon.stats[4].base_stat}</h5>
        <h5>Speed: {pokemon.stats[5].base_stat}</h5>
      </div>
    </div>
    <div className="move-container bottom">
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name}</option>
        ))}
      </select>
    </div>
  </div>
)

export default PokemonListEntry;