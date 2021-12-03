import React from 'react';
import './styles/TypeCoverage.css';

const GetTypes = ({ types, allTypes }) => {
  let result = [];
  {for (let type in allTypes) {
    if (types.includes(type)) {
      result.push(<h4 key={type} className='included'>{type}</h4>)
    } else {
      result.push(<h4 key={type} className='not-included'>{type}</h4>)
    }
  }}
  return result;
}

const TypeCoverage = ({ types, allTypes }) => (
  <div id="type-coverage">
    <GetTypes types={types} allTypes={allTypes}/>
  </div>
)


export default TypeCoverage;