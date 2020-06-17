const Deck = require("./Deck");
const Player = require("./Player");

class Game {
  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.winner = null;
  }
  playerByID(id) {
    return this.players.find((p) => p.getID === id);
  }
  addPlayer(name) {
    let maxID = max(...this.players.map((p) => p.getID)) + 1;
    this.players.push(new Player(maxID, name));
  }
  removePlayer(id) {
    const index = this.players.indexOf(this.playerByID(id));
    players.splice(index, 1);
  }
  play(id = this.players[0].getID, playedCard) {
    //assumes the card played is valid, as checked on client side
    this.playerByID(id).play(playedCard);
    this.deck.place(playedCard);
    //Takes the last who just played and appends to end of players array
    const justPlayed = this.players.shift();
    this.players.push(justPlayed);
    this.checkWinner();
  }
  draw(id = this.players[0].getID) {
    const card = this.deck.draw();
    this.playerByID(id).take(card);
    return card;
  }
  //Checks if any players have won; if found, sets winner to the
  // winning player and returns the player
  checkWinner() {
    const tempWin = this.players.find((p) => p.getWin());
    if (tempWin) {
      this.winner = tempWin;
      return tempWin;
    }
  }
}

module.exports = Game;
