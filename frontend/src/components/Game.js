import React, { useState, cloneElement } from 'react';
import Player from './Player';
import Deck from './Deck';
import Opponent from './Opponent';
import './../App.css';
import socketService from './../services/socket.js';

const Game = ({ numPlayers }) => {
  const [id, setId] = useState(null);
  const [hand, setHand] = useState([]);
  const [cardOnTop, setCardOnTop] = useState([]);
  const [opponents, setOpponents] = useState([]);
  const [currTurn, setCurrTurn] = useState(null);
  const [winner, setWinner] = useState(null);

  const draw = () => {
    socketService.draw({ id: id });
  };

  const playCard = (card) => {
    socketService.play({ id: id, card: card });
  };

  socketService.socket.on('fetch', (data) => {
    console.log(`receiving data as player id ${id}`);
    setWinner(data.winner);
    setCardOnTop(data.topCard);
    setCurrTurn(data.currPlayer);
    setHand(data.playerData.find((p) => p.id === id).hand);
    setOpponents(data.playerData.filter((p) => p.id !== id));
  });

  socketService.socket.on('giveID', (data) => {
    console.log(`receiving id ${data.id} from server`);
    setId(data.id);
  });

  if (!winner) {
    return (
      //players in circle
      //deck in middle/ uno button
      <div>
        <center>
          <table>
            <tbody>
              <tr>
                {opponents.map((o) => (
                  <td key={o.id} className='opponent'>
                    <Opponent opponent={o} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <Deck />
          <p>Top Card: {`${cardOnTop.color}${cardOnTop.value}`}</p>
          <button onClick={() => draw()}>Draw</button>
          <Player
            player={{ hand: hand, id: id }}
            cardOnTop={cardOnTop}
            currTurn={currTurn}
            playCard={playCard}
          />
        </center>
      </div>
      //player's deck with navigation buttons
    );
  } else {
    return <h1>Game Over Boiz!</h1>;
  }
};

export default Game;
