import { Game } from './../js/jeopardy.js';
import { Player } from './../js/player.js';

describe('Game', function(){
  let newGame = new Game("Kim", "Technology");
  let newPlayer = new Player("Kim");

  beforeEach(function(){

    jasmine.clock().install();
    newPlayer.timeLeft = 10;
    newPlayer.setAnswerTime();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it('should test whether can instantiate newGame object', function(){
    expect(newGame.player).toEqual("Kim")
  });

  it('should test whether can instantiate newPlayer object', function(){
    expect(newPlayer.name).toEqual("Kim")
  });

  it('should have a player and a time left of 10 when it is created', function() {
    expect(newPlayer.name).toEqual("Kim");
    expect(newPlayer.timeLeft).toEqual(10);
  });

  it('should have a time left of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(newPlayer.timeLeft).toEqual(7);
  });

});
