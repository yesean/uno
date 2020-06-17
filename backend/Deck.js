class Deck {
  constructor() {
    let deck = [];
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 10; j++) {
        deck.push({ color: i, number: j });
        deck.push({ color: i, number: j });
      }
    }
    shuffle(deck);
    this.discard = [deck.pop()];
    this.deck = deck;
  }

  peek() {
    return this.discard.peekBack();
  }

  check() {
    if (this.deck.length === 0) {
      const last = this.discard.pop();
      shuffle(this.discard);
      this.deck = this.discard;
      this.discard = [last];
    }
  }

  draw() {
    let temp = this.deck.pop();
    this.check()
    return temp
  }

  place(card) {
    this.discard.push(card);
    this.check()
  }
}

module.exports = Deck;
