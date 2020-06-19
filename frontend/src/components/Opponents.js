import React from 'react';
import './../App.css';

const Opponents = ({ opponents }) => {
  return (
    <div className='opponents'>
      {opponents.map((opponent) => (
        <div className='opponent'>
          <div className='opponentName'>{opponent.name}</div>
          <div className='opponentSize'>{opponent.hand.length}</div>
        </div>
      ))}
    </div>
  );
};

export default Opponents;
