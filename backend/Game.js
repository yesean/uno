


class Game {
  constructor() {
    this.players = [];
    this.deck = initializeDeck();
    this.currPlayer = 0;
    this.winner = null;
  }
  addPlayer(name) {
    this.players.push(new Player());
  }
  removePlayer(id) {
    
  }
  play(player=this.currPlayer, playedCard) {

  }
  draw(player=this.currPlayer) {

  }
}

module.exports = Game;
