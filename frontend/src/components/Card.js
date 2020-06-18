import React from 'react';

const Card = ({ card, validateCard }) => {
  // console.log(`color: ${card.color}`);
  const cardStyle = {
    color: card.color,
    textAlign: 'center',
    fontSize: 'xx-large',
    borderStyle: 'solid',
    height: 100,
    width: 80,
  };
  return (
    <td
      style={cardStyle}
      className={'playerCard'}
      onClick={() => validateCard(card)}>
      {card.value}
    </td>
  );
};

export default Card;
