const express = require("express");
const cors = require("cors");
const game = require("./Game");

const app = express();
app.use(cors());
app.use(express.static("build"));
app.use(express.json());

let players = [
  { name: "benis", id: 0 },
  { name: "bean", id: 1 },
];



const errorHandler = () => {
  return null;
};


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
