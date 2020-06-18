import React, { useState } from "react";
import "./../App.css";
import socketService from "./../services/socket.js";
import Deck from "./Deck";
import Opponent from "./Opponent";
import Player from "./Player";

const Game = () => {
  // const [id, setId] = useState(null);
  // const [hand, setHand] = useState([]);
  // const [cardOnTop, setCardOnTop] = useState([]);
  // const [opponents, setOpponents] = useState([]);
  // const [currTurn, setCurrTurn] = useState(null);
  // const [winner, setWinner] = useState(null);

  const [props, setProps] = useState({
    id: null,
    hand: [],
    cardOnTop: [],
    opponents: [],
    currTurn: [],
    winner: [],
  });

  const { id, hand, cardOnTop, opponents, currTurn, winner } = props;

  const draw = () => {
    console.log(`calling draw`);
    socketService.draw({ id: id });
  };

  const playCard = (card) => {
    socketService.play({ id: id, card: card });
  };

  if (id) {
    socketService.socket.on("fetch", (data) => {
      console.log(`receiving data as player id ${id}`);
      console.log(`player data: ${data.playerData.join()}`);
      console.log("hand: " + data.playerData.find((p) => p.id === id).hand);
      // setWinner(data.winner);
      // console.log(`rendering hand`)
      // setCardOnTop(data.topCard);
      // console.log(`rendering hand`)
      // setCurrTurn(data.currPlayer);
      // console.log(`rendering hand`)
      // setHand(data.playerData.find((p) => p.id === id).hand);
      // console.log(`rendering hand`)
      // setOpponents(data.playerData.filter((p) => p.id !== id));
      // console.log(`rendering hand`)

      setProps({
        ...props,
        hand: data.playerData.find((p) => p.id === id).hand,
        cardOnTop: data.topCard,
        opponents: data.playerData.filter((p) => p.id !== id),
        currTurn: data.currPlayer,
        winner: data.winner,
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
                      <td key={o.id} className="opponent">
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
    });
  }

  socketService.socket.on("giveID", (data) => {
    setProps({ ...props, id: data.id });
  });
  return null;
};

export default Game;
