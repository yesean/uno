import React, { useState } from 'react';
import socketService from '../services/socket.js';

const Home = ({ setName, setID }) => {
  const [box, setBox] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    socketService.sendName({ name: box });
    socketService.socket.on('giveID', (data) => {
      setID(data.id);
      setName(box);
    });
  };

  const handleNameChange = (e) => {
    setBox(e.target.value);
  };

  return (
    <div className='home'>
      <h3>Welcome to Uno!</h3>
      <h3>Enter Name:</h3>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <center>
            <input value={box} onChange={handleNameChange} font-size='30' />
          </center>
        </div>
        <div>
          <center>
            <button type='submit'>JOIN</button>
          </center>
        </div>
      </form>
    </div>
  );
};

export default Home;
