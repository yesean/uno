import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home.js';
import Game from './components/Game';

function App() {
  const [name, setName] = useState(null);
  const [id, setID] = useState(null);

  if (name && id) {
    return (
      <div className='window'>
        <Header />
        <Game name={name} id={id} />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className='window'>
        <Header />
        <Home setName={setName} setID={setID} />
        <Footer />
      </div>
    );
  }
}

export default App;
