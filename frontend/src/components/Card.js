import React from 'react';

const Card = ({ card, validateCard }) => {
  // console.log(`color: ${card.color}`);
  return (
    <button onClick={() => validateCard(card)}>
      {card.color}
      {card.value}
    </button>
  );
};

export default Card;
