import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import socketService from './services/socket.js';

let name = 'benis'
let id = socketService.sendName({ name });

function App() {
  return (
    <div>
      <Header />
      <Game name={name} id={id}/>
      <Footer />
    </div>
  );
}

export default App;
