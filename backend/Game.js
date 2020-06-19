const Deck = require("./Deck");
const Player = require("./Player");

class Game {
  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.winner = null;
  }
  playerByID(id) {
    return this.players.find((p) => p.getID() === id);
  }
  addPlayer(name) {
    let maxID = 1;
    if (this.players.length != 0) {
      maxID = Math.max(...this.players.map((p) => p.getID())) + 1;
    }
    const temp = new Player(name, maxID);
    this.players.push(temp);
    for (let i = 0; i < 7; i++) {
      this.draw(temp.getID());
    }
    return temp;
  }
  handleReverse() {

  }
  handleCancel() {

  }
  handDraw() {

  }
  handleWild() {

  }
  
  removePlayer(id) {
    const index = this.players.indexOf(this.playerByID(id));
    const rem = this.players.splice(index, 1)[0];
    rem.getHand().map(c => this.deck.burn(c))
  }
  play(id = this.players[0].getID(), playedCard) {
    //assumes the card played is valid, as checked on client side
    this.playerByID(id).play(playedCard);
    this.deck.place(playedCard);
    //Takes the last who just played and appends to end of players array
    const justPlayed = this.players.shift();
    this.players.push(justPlayed);
    this.checkWinner();
  }
  draw(id = this.players[0].getID()) {
    const card = this.deck.draw();
    this.playerByID(id).take(card);
    // console.log(this.deck.getDeck())
    // console.log(this.players.map(p => p.getHand()));
    return card;
  }
  //Checks if any players have won; if found, sets winner to the
  // winning player and returns the player
  checkWinner() {
    const tempWin = this.players.find((p) => p.getWin());
    if (tempWin) {
      this.winner = tempWin.getName();
    }
  }
  getUpdate() {
      //temp print
    console.log('size of deck: ',this.deck.deck.length)
    return {
      currPlayer: this.players[0].getID(),
      topCard: this.deck.peek(),
      playerData: this.players.map((p) => p.getUpdate()),
      winner: this.winner
    };
  }
}

module.exports = Game;
