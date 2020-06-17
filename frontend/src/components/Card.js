import React, { useState } from 'react';

const Card = ({ card, validateCard }) => {
  return (
    <div>
      <button onClick={() => validateCard(card)}>
        {card.color}
        {card.value}
      </button>
    </div>
  );
};

export default Card;
