import React from 'react';

const Opponent = (props) => {
  const id = props.id;
  const cards = props.cards;

  return (
    <div>
      {id}
      {cards}
    </div>
  );
};

export default Opponent;
