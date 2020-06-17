import React from 'react';
import './../App'

const Deck = (props) => {
  let cards = props.cards;

  return <div id='deck'>Cards in Deck: {cards}</div>;
};

export default Deck;
