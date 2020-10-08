const Turn = require("./turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
  }

  endRound() {
    let percent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`);
    return `** Round over! ** You answered ${percent}% of the questions correctly!`
  }
}

module.exports = Round;