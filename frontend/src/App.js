import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home.js";
import Game from "./components/Game";
import socketService from "./services/socket.js";

function App() {
  const [name, setName] = useState(null);
  const [id, setID] = useState(null);

  useEffect(() => {
    if (name) {
      socketService.sendName({ name });
      socketService.socket.on("giveID", (data) => {
        setID(data.id)
      });
    }
  });
  
  if (name && id) {
    return (
      <div>
        <Header />
        <Game name={name} id={id}/>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
      <Header />
      <Home setName={setName}/>
      <Footer />
    </div> 
    )
  }
}

export default App;
