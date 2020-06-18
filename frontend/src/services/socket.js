import Game from './../components/Game';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const play = ({ id, card }) => {
  socket.emit('play', { id, card });
};

const draw = ({ id }) => {
  socket.emit('draw', { id });
};

const sendName = ({ name }) => {
  socket.emit('giveName', { name });
};

const uno = ({ id }) => {
  socket.emit('uno', { id });
};

socket.on('fetch', (data) => {
  Game.setWinner(data.winner);
  Game.setCardOnTop(data.topCard);
  Game.setCurrTurn(data.currPlayer);
  Game.setCards(data.playerData.find((p) => p.id === Game.id).hand);
  Game.setOpponents(data.playerData.filter((p) => p.id !== Game.id));
});

socket.on('giveID', (data) => {
  Game.setId(data.id);
  Game.setCards(data.hand);
});

export default { play, draw, uno, sendName};
