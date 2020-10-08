const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/deck');
const Round = require('../src/round');

describe('Round', function() {
  let deck;
  let card1;
  let card2;
  let card3;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should return the current card at the top of the deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have a number of turns that defaults to 0', function() {
    expect(round.turns).to.equal(0);
  });

  it('should have a property that contains the incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should increase the number of turns', function() {
    round.takeTurn();

    expect(round.turns).to.equal(1);
  })

  it('should change the current card', function() {
    round.takeTurn();

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should provide correct feedback if right answer is chosen', function() {
    let correctAnswer = round.takeTurn('sea otter');

    expect(correctAnswer).to.equal('correct!');
  });

  it('should provide incorrect feedback if wrong answer is chosen', function() {
    let incorrectAnswer = round.takeTurn('pug');

    expect(incorrectAnswer).to.equal('incorrect!');
  });

  it('should record the id of the incorrect guesses', function() {
    let incorrectAnswer1 = round.takeTurn('pug');
    let incorrectAnswer2 = round.takeTurn('appendix');

    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('sea otter');
    round.takeTurn('appendix');

    expect(round.calculatePercentCorrect()).to.equal(50)
  });

  it('should print a message to the console', function() {
    round.takeTurn('sea otter')
    round.takeTurn('gallbladder')
    round.takeTurn('playing with bubble wrap')
    round.endRound();

    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!')
  });
});