const express = require("express");
const cors = require("cors");
const Game = require("./Game");

const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let players = [{ name: "benis" }, { name: "bean" }];

const currentGame = new Game();


const errorHandler = () => {
  return null;
};

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
