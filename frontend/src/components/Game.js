import React, { useState, useEffect } from "react";
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
    winner: null,
  });

  const { id, hand, cardOnTop, opponents, currTurn, winner } = props;

  const draw = () => {
    console.log(`calling draw`);
    socketService.draw({ id: id });
  };

  const playCard = (card) => {
    socketService.play({ id: id, card: card });
  };

  // if (id) {
  //   socketService.socket.on("fetch", (data) => {
  //     // console.log(`receiving data as player id ${id}`);
  //     // console.log(`player data: ${data.playerData.join()}`);
  //     // console.log('hand: ' + data.playerData.find((p) => p.id === id).hand);
  //     console.log("fetch run");
  //     setProps({
  //       ...props,
  //       hand: data.playerData.find((p) => p.id === id).hand,
  //       cardOnTop: data.topCard,
  //       opponents: data.playerData.filter((p) => p.id !== id),
  //       currTurn: data.currPlayer,
  //       winner: data.winner,
  //     });
  //   });
  // }

  useEffect(() => {
    socketService.socket.on("giveID", (data) => {
      setProps({ ...props, id: data.id });
    });
  }, []);

  useEffect(() => {
      socketService.socket.on("fetch", (data) => {
        console.log("fetch run");
        setProps({
          ...props,
          hand: data.playerData.find((p) => p.id === id).hand,
          cardOnTop: data.topCard,
          opponents: data.playerData.filter((p) => p.id !== id),
          currTurn: data.currPlayer,
          winner: data.winner,
        });
      });
    }
  }, []);

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
};

export default Game;
