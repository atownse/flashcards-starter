const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');
const Game = require('../src/Game');

describe('Round', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should have a current round property assigned to null at the start', function() {
    expect(game.currentRound).to.equal(null);
  })

  it('should know the number of cards being used in the game', function() {
    game.start();
    expect(game.currentRound.deck.cards.length).to.equal(30);
  })

  it('should create instances of cards', function() {
    game.start();
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });

  it('should create an instance of round once the game starts', function() {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
});