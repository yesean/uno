import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3000');

const play = ({ id, card }) => {
  socket.emit('play', { id, card });
};

const draw = ({ id }) => {
  socket.emit('draw', { id });
};

const uno = () => {};

export default { play, draw, uno };
