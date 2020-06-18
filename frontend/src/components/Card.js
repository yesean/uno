import React from 'react';
import './../App.css'

const Card = ({ card, validateCard }) => {
  return (
    <td
      style={{ backgroundColor: `${card.color}` }}
      className='card'
      onClick={() => validateCard(card)}>
      {card.value}
    </td>
  );
};

export default Card;
