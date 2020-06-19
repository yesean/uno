import React, { useState, useEffect } from 'react';
import './../App.css';
import socketService from './../services/socket.js';
import Deck from './Deck';
import Opponents from './Opponents';
import Player from './Player';

const Game = ({ name, id }) => {
  const [props, setProps] = useState({
    hand: [],
    cardOnTop: [],
    opponents: [],
    currTurn: [],
    winner: [],
  });

  const { hand, cardOnTop, opponents, currTurn, winner } = props;

  const draw = () => {
    console.log(`calling draw`);
    socketService.draw({ id: id });
  };

  const playCard = (card) => {
    socketService.play({ id: id, card: card });
  };

  useEffect(() => {
    socketService.socket.on('fetch', (data) => {
      setProps({
        ...props,
        hand: data.playerData.find((p) => p.id === id).hand,
        cardOnTop: data.topCard,
        opponents: data.playerData.filter((p) => p.id !== id),
        currTurn: data.currPlayer,
        winner: data.winner,
      });
    });
  }, []);

  if (!winner) {
    return (
      //players in circle
      //deck in middle/ uno button
      <div className='game'>
        <div className='turn'>
          {id === currTurn
            ? 'Your Turn'
            : `${opponents.find((p) => p.id === currTurn).name}'s turn`}
        </div>
        <Opponents opponents={opponents} />
        <div className='drawTopDeck'>
          <div className='draw' onClick={() => draw()}>
            Draw
          </div>
          <div
            style={{ backgroundColor: `${cardOnTop.color}` }}
            className='topCard'>
            {`${cardOnTop.value}`}
          </div>
          <Deck />
        </div>
        <Player
          player={{ hand: hand, id: id }}
          cardOnTop={cardOnTop}
          currTurn={currTurn}
          opponents={opponents}
          playCard={playCard}
        />
        <div className='playerName'>{`Playing as ${name}`}</div>
      </div>
      //player's deck with navigation buttons
    );
  } else {
    return (
      <center>
        <h1>Game Over Boiz!</h1>
        <h2>{winner} has won!</h2>
      </center>
    );
  }
};

export default Game;
