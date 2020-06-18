const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const Game = require("./Game");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let players = [{ name: "benis" }, { name: "bean" }];
const currentGame = new Game();

io.on("connection", (socket) => {
  console.log("a user connected");
  //   Game.addPlayer('test player');
  //   socket.on('name input', m => {
  //   })
  socket.on("draw", (m) => {
    //call back returning the drawn card
    io.emit("drawReturn", currentGame.draw(m.id));
  });
  socket.on("play", (m) => {
    currentGame.play(m.id, m.card)
    io.emit("playReturn", currentGame.draw(m.id));
  });
  socket.on("deal", (m) => {

  });
  socket.on("disconnect", m => {
    console.log("user disconnected");
    // Game.removePlayer();
  });
});

const errorHandler = () => {
  return null;
};

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
