const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/turn');

describe('Turn', function() {
  let card;
  let trueAnswer;
  let falseAnswer;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    trueAnswer = new Turn('sea otter', card);
    falseAnswer = new Turn('pug', card);
  }); 

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(trueAnswer).to.be.an.instanceof(Turn);
    expect(falseAnswer).to.be.an.instanceof(Turn);
  }); 

  it('should have a property of a guess', function() {
    expect(trueAnswer.guess).to.equal('sea otter');
  });

  it('should have a property of the instantiated card', function() {
    expect(trueAnswer.card).to.equal(card);
    expect(card).to.be.an.instanceof(Card);
  });

  it('should return a guess', function() {
    expect(trueAnswer.returnGuess()).to.equal('sea otter');
  });

  it('should return a card', function() {
    expect(trueAnswer.returnCard()).to.equal(card);
  });

  it('should return false if guess is incorrect', function() {
    expect(falseAnswer.evaluateGuess()).to.equal(false);
  });

  it('should return true if guess is correct', function() {
    expect(trueAnswer.evaluateGuess()).to.equal(true);
  });

  it('should return string of "incorrect!" if guess is wrong', function() {
    expect(falseAnswer.giveFeedback()).to.equal('incorrect!');
  });

  it('should return string of "correct!" if guess is right', function() {
    expect(trueAnswer.giveFeedback()).to.equal('correct!');
  });
});