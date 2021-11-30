import React from 'react';

const TypeCoverage = ({ types }) => (
  <div id="type-coverage">
    {types.map(type => (
      <h4>{type}</h4>
    ))}
  </div>
)


export default TypeCoverage;