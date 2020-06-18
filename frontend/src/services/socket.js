import Game from './../components/Game';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const play = (data) => {
  console.log(
    `sending ${data.card.color}${data.card.value} as player id ${data.id}`
  );
  socket.emit('play', data);
};

const draw = (data) => {
  console.log(`drawing a card as id ${data.id}`);
  socket.emit('draw', data);
};

const sendName = (data) => {
  console.log(`sending name ${data.name} to server`);
  socket.emit('giveName', data);
};

const uno = (data) => {
  console.log(`sending uno signal to server from id ${data.id}`);
  socket.emit('uno', data);
};

export default { play, draw, uno, sendName, socket };
