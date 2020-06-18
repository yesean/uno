class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.hand = [];
  }
  play(card) {
    const index = this.hand.indexOf(card);
    return this.hand.splice(index, 1)[0];
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
  getHand() {
      return this.hand
  }
  getUpdate() {
      console.log("hand of player ", this.id)
      //temp print
      this.hand.map(c => console.log(c))
      return {
          name: this.name,
          id: this.id,
          hand: this.hand
      }
  }
}

module.exports = Player
