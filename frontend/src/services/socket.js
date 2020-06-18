import Game from './../components/Game';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const play = ({ id, card }) => {
  console.log(`sending ${card.color}${card.value} as player id ${id}`);
  socket.emit('play', { id, card });
};

const draw = (data) => {
  console.log(`drawing a card as id ${data.id}`);
  socket.emit('draw', data);
};

const sendName = (data) => {
  console.log(`sending name ${data.name} to server`);
  socket.emit('giveName', data);
};

const uno = ({ id }) => {
  console.log(`sending uno signal to server from id ${Game.id}`);
  socket.emit('uno', { id });
};

socket.on('fetch', (data) => {
  console.log(`receiving data as player id ${Game.id}`);
  Game.setWinner(data.winner);
  Game.setCardOnTop(data.topCard);
  Game.setCurrTurn(data.currPlayer);
  Game.setCards(data.playerData.find((p) => p.id === Game.id).hand);
  Game.setOpponents(data.playerData.filter((p) => p.id !== Game.id));
});

socket.on('giveID', (data) => {
  console.log(`receiving id ${data.id} to server`);
  Game.setId(data.id);
});

export default { play, draw, uno, sendName };
