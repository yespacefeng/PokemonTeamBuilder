import React, { useState } from 'react';

const AddPokemon = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onClick = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  }

  return (
    <form id="add-pokemon">
      <h3>Add A Pokemon</h3>
      <label>Pokemon Name</label><br></br>
      <input type="text" id="name" value={term} onChange={e => { setTerm(e.target.value) }}></input><br></br>
      <button className='submit-btn' onClick={event => { onClick(event) }}>Find Pokemon</button>
    </form>
  )
};

export default AddPokemon;