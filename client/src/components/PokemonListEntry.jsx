import React from 'react';
import './styles/PokemonListEntry.css';

const PokemonListEntry = ({ pokemon }) => (
  <div className="pokemon-list-entry">
    <div className='info'>
      <h4 className='name'>{pokemon.name[0].  toUpperCase () + pokemon.name.slice(1)}</h4>
      <select className="ability">
        {pokemon.abilities.map(ability => (
          <option key={ability.slot} value= {ability.  ability.name}>{ability.ability.name.split('-').join(' ')}</option>
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
    <div className='stats-container'>
      <div className='stats'>
        <h5>HP</h5>
        <h5>{pokemon.stats[0].base_stat}</h5>
      </div>
      <div className='stats'>
        <h5>Attack</h5>
        <h5>{pokemon.stats[1].base_stat}</h5>
      </div>
      <div className='stats'>
        <h5>Defense</h5>
        <h5>{pokemon.stats[2].base_stat}</h5>
      </div>
      <div className='stats'>
        <h5>Sp. Attack</h5>
        <h5>{pokemon.stats[3].base_stat}</h5>
      </div>
      <div className='stats'>
        <h5>Sp. Defense</h5>
        <h5>{pokemon.stats[4].base_stat}</h5>
      </div>
      <div className='stats'>
        <h5>Speed</h5>
        <h5>{pokemon.stats[5].base_stat}</h5>
      </div>
    </div>
    <div className='move-list-container'>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name.split('-').join(' ')}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name.split('-').join(' ')}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name.split('-').join(' ')}</option>
        ))}
      </select>
      <select className='move-list'>
        {pokemon.moves.map(move => (
          <option key={move.move.name} value={move.move.name}>{move.move.name.split('-').join(' ')}</option>
        ))}
      </select>
    </div>
  </div>
)

export default PokemonListEntry;