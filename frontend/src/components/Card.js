import React, { useState } from 'react';

const Card = ({ color, value, validateCard }) => {
  const card = {
    color: color,
    value: value,
  };

  return (
    <div>
      <button onClick={() => validateCard(card)}>
        {color}
        {value}
      </button>
    </div>
  );
};

export default Card;
