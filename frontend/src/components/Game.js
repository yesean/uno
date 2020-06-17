import React, { useState, cloneElement } from 'react';
import Player from './Player';
import Deck from './Deck';
import Opponent from './Opponent';

const createCard = (color, value) => {
  return {
    color: color,
    value: value,
  };
};

const cardOnTop = createCard('y', 1);

const deck = [
  createCard('b', 1),
  createCard('b', 2),
  createCard('b', 3),
  createCard('b', 4),
  createCard('b', 5),
  createCard('b', 6),
  createCard('b', 7),
];

const opponents = [
  {
    id: 'op1',
    cards: 4,
  },
  {
    id: 'op2',
    cards: 10,
  },
  {
    id: 'op3',
    cards: 2,
  },
];

const pcards = [
  createCard('g', 1),
  createCard('g', 2),
  createCard('g', 3),
  createCard('g', 4),
  createCard('g', 5),
];

const player = {
  id: '1',
  cards: pcards,
};

const currTurn = 1;

const Game = ({ numPlayers }) => {
  const [currPlayer, setCurrPlayer] = useState(0);
  const [winner, setWinner] = useState(null);
  // const []

  const nextPlayer = () => {
    setCurrPlayer((currPlayer + 1) % numPlayers);
  };

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
                  <td key={o.id}>
                    <Opponent opponent={o} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <Deck cards={deck.length} />
          <p>Top Card: {`${cardOnTop.color}${cardOnTop.value}`}</p>
          <br></br>
          <Player player={player} cardOnTop={cardOnTop} currTurn={currTurn} />
        </center>
      </div>
      //player's deck with navigation buttons
    );
  } else {
    return <h1>Game Over Boiz!</h1>;
  }
};

export default Game;
