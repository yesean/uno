import React, { useState, useEffect } from 'react';
import './../App.css';
import socketService from './../services/socket.js';
import Deck from './Deck';
import Opponent from './Opponent';
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
        <h1>Playing as {name}</h1>
        <table style={{ borderSpacing: 20 }} className='opponents'>
          <tbody style={{ marginTop: 10, marginBottom: 10 }}>
            <tr>
              {opponents.map((o) => (
                <Opponent opponent={o} />
              ))}
            </tr>
          </tbody>
        </table>
        <table className='deck-topCard'>
          <tbody>
            <tr>
              <td>
                <Deck />
              </td>
              <td
                style={{ backgroundColor: `${cardOnTop.color}` }}
                className='card'>
                {`${cardOnTop.value}`}
              </td>
            </tr>
          </tbody>
        </table>
        <div className='draw' onClick={() => draw()}>
          Draw
        </div>
        <Player
          player={{ hand: hand, id: id }}
          cardOnTop={cardOnTop}
          currTurn={currTurn}
          playCard={playCard}
        />
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
