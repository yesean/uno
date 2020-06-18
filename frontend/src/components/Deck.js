import React from 'react';
import './../App';

const Deck = () => {
  const deckStyle = {
    color: 'black',
    borderStyle: 'solid',
    borderRadius: 1,
    height: 100,
    width: 80,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={deckStyle} id='deck'>
      Deck
    </div>
  );
};

export default Deck;
