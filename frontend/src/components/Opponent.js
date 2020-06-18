import React from 'react';

const Opponent = ({ opponent }) => {
  const opponentStyle = {
    height: 100,
    width: 80,
    padding: 0,
    fontSize: 'x-large',
    color: 'red',
    border: 'solid',
    borderRadius: 1,
    alignItems: 'center',
    textAlign: 'center',
  };

  return (
    <td key={opponent.id} style={opponentStyle} className='opponent'>
      {opponent.name}
      <br></br>
      {opponent.hand.length}
    </td>
  );
};

export default Opponent;
