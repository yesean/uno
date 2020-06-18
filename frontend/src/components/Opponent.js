import React from 'react';
import './../App.css';

const Opponent = ({ opponent }) => {
  return (
    <td key={opponent.id} className='opponent'>
      {opponent.name}
      <br></br>
      {opponent.hand.length}
    </td>
  );
};

export default Opponent;
