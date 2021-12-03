import React from 'react';
import './styles/TypeCoverage.css';

const TypeCoverage = ({ types }) => (
  <div id="type-coverage">
    {types.map(type => (
      <h4>{type[0].toUpperCase() + type.slice(1)}</h4>
    ))}
  </div>
)


export default TypeCoverage;