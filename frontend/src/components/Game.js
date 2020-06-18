import React, { useState, useEffect } from "react";
import "./../App.css";
import socketService from "./../services/socket.js";
import Deck from "./Deck";
import Opponent from "./Opponent";
import Player from "./Player";

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
    socketService.socket.on("fetch", (data) => {
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

  const cardOnTopStyle = {
    fontSize: "xx-large",
    color: cardOnTop.color,
    height: 100,
    width: 80,
    border: "solid",
    borderRadius: 1,
    margin: 3,
    alignItems: "center",
  };

  if (!winner) {
    return (
      //players in circle
      //deck in middle/ uno button
      <div>
        <center>
          <h1>Playing as {name}</h1>
          <table>
            <tbody>
              <tr>
                {opponents.map((o) => (
                  <td key={o.id} className="opponent">
                    <Opponent opponent={o} />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <Deck />
          <div style={cardOnTopStyle}>{`${cardOnTop.value}`}</div>
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
