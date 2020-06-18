import React from 'react';
import './../App';

const Deck = () => {
  const deckStyle = {
    height: 100,
    width: 80,
    color: 'black',
    borderStyle: 'solid',
    borderRadius: 1,
    marginTop: '10',
    marginBottom: '10',
    fontSize: 'xx-large',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };
  return (
    <div style={deckStyle} id='deck'>
      Deck
    </div>
  );
};

export default Deck;
