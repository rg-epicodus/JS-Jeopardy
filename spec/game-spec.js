import { Game } from './../js/jeopardy.js';
import { Player } from './../js/player.js';
import { Question } from './../js/question.js';

describe('Game', function(){
  let newGame = new Game("Kim", "Technology");
  let newPlayer = new Player("Kim", 200);
  let newQues = new Question("What is your name?", "Kim", 15);

  beforeEach(function(){

    jasmine.clock().install();
    newQues.timeLeft = 15;
    newQues.setAnswerTime();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it('should test whether can instantiate newGame object', function(){
    expect(newGame.player).toEqual("Kim")
  });

  it('should test whether can instantiate newPlayer object', function(){
    expect(newPlayer.name).toEqual("Kim")
    expect(newPlayer.changeScore).toEqual(200)
  });

  it('should test whether can instantiate newQuestion object', function(){
    expect(newQues.question).toEqual("What is your name?")
  });


  it('should have time of 15 seconds at start', function() {
    expect(newQues.timeLeft).toEqual(15);
  });

  it('should have a time left of 12 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(newQues.timeLeft).toEqual(12);
  });

});
