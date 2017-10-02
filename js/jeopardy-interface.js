import { score } from "./../js/jeopardy.js";

$(document).ready(function() {

  function displayScore(currentScore, questionValue) {
    $('#displayScore').html(`<p>Your current score is: ${currentScore}`);
    $('#displayValue').html(`<p>Your question value is: ${questionValue}`);

  }

  function displayJson(x,y) {

  }

  function displayClues() {

  }


  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    let currentScore = 10;
    let questionValue = 20;
    score.changeScore(currentScore, questionValue, displayScore);
    score.randomQuestions();
    // score.getClues();
  });


});
