class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.hand = [];
  }
  play(card) {
    const index = this.hand.indexOf(card);
    return card;
  }
  take(card) {
    this.hand.push(card);
  }
  getID() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getWin() {
      return this.hand.length === 0
  }
}

module.exports = Player
