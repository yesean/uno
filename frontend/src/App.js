import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Game from './components/Game';
import socketService from './services/socket.js';

socketService.sendName({ name: 'benis is my name' });

function App() {
  return (
    <div>
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
