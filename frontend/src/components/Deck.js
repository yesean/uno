import React from 'react';
import './../App';

const Deck = () => {
  const deckStyle = {
    color: 'black',
    borderStyle: 'solid',
    borderRadius: 1,
    height: 100,
    width: 80,
    margin: 'auto',
    fontSize: 'xx-large',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  };
  return (
    <div style={deckStyle} id='deck'>
      Deck
    </div>
  );
};

export default Deck;
