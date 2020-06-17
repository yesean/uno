import React, { useState, cloneElement } from 'react';
import Player from './Player';
import Deck from './Deck';
import Opponent from './Opponent';
import './../App.css';

const createCard = (color, value) => {
  return {
    color: color,
    value: value,
  };
};

const currDeck = [
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

const pid = '1';

const currPlayer = {
  id: '1',
  cards: pcards,
};

const currTurn = 1;

const Game = ({ numPlayers }) => {
  const [cards, setCards] = useState(pcards);
  const [id, setId] = useState(pid);
  const [winner, setWinner] = useState(null);
  const [cardOnTop, setCardOnTop] = useState(createCard('y', 1));
  const [deck, setDeck] = useState(currDeck);

  const draw = () => {
    setCards(cards.concat(deck.pop()));
    setDeck(deck);
  };

  const playCard = (card) => {
    setCardOnTop(card);
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
                  <td key={o.id} className='opponent'>
                    <Opponent opponent={o} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <Deck cards={deck.length} />
          <p>Top Card: {`${cardOnTop.color}${cardOnTop.value}`}</p>
          <button onClick={() => draw()}>
              Draw
          </button>
          <Player
            player={{ cards: cards, id: id }}
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
