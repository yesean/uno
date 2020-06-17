import React from 'react';

const Deck = (props) => {
  let cards = props.cards;

  return <div>Cards in Deck: {cards}</div>;
};

export default Deck;
