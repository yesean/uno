import React from 'react';

const Opponent = ({ opponent }) => {
  return (
    <div>
      <p>Op: {opponent.id}</p>
      <p>Cards: {opponent.cards}</p>
    </div>
  );
};

export default Opponent;
