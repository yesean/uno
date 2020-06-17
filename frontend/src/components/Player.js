import React, { useState } from 'react';
import Opponent from './Opponent';
import Hand from './Hand'

const Player = (props) => {
  const cards = props.cards;
  const playersHands = props.playersHands;
  const cardOnTop = props.cardOnTop;
  const id = props.id;
  const currTurn = props.currTurn;
  const myTurn = id == currTurn;

  const validateCard = (card) => {
    return card.value === cardOnTop.value || card.color === cardOnTop.color;
  };

  return (
    <div>
      {playersHands.map((p) => (
        <Opponent id={p.id} cards={p.cards} />
      ))}
      <Hand cards={cards} validateCard={validateCard} />
    </div>
  );
};

export default Player;
