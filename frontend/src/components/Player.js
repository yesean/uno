import React from 'react';
import Hand from './Hand';

const Player = (props) => {
  const player = props.player;
  const cardOnTop = props.cardOnTop;
  const currTurn = props.currTurn;
  const myTurn = player.id === currTurn;

  const validateCard = (card) => {
    if (myTurn) {
      if (card.color === cardOnTop.color || card.value === cardOnTop.value) {
        props.playCard(card);
      } else {
        alert(`Play a valid card.`);
      }
    } else {
      if (card.color === cardOnTop.color && card.value === cardOnTop.value) {
        props.playCard(card);
      }
    }
  };

  return (
    <div>
      <Hand cards={player.hand} validateCard={validateCard} />
    </div>
  );
};

export default Player;
