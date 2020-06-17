import React from 'react';
import Hand from './Hand';

const Player = (props) => {
  const player = props.player;
  const cardOnTop = props.cardOnTop;
  const currTurn = props.currTurn;
  const myTurn = player.id === currTurn;

  const validateCard = (card) => {
    if (card.color === cardOnTop.color || card.value === cardOnTop.value) {
      props.playCard(card);
    } else {
      alert(`Play a valid card.`)
    }
  };

  return (
    <div>
      <Hand cards={player.cards} validateCard={validateCard} />
    </div>
  );
};

export default Player;
