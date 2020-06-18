import React from 'react';

const Card = ({ card, validateCard }) => {
  // console.log(`color: ${card.color}`);
  const cardStyle = {
    color: card.color,
  };
  return (
    <td style={cardStyle} className={'playerCard'}>
      {card.value}
    </td>
  );
};

export default Card;
