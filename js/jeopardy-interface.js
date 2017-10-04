
import {Question} from './../js/jeopardy.js';
import { score } from "./../js/jeopardy.js";
// import { masterFirebaseConfig } from './api-keys';

$(document).ready(function() {


  function displayScore(currentScore, questionValue) {
    $('#displayScore').html(`<p>Your current score is: ${currentScore}`);
    $('#displayValue').html(`<p>Your question value is: ${questionValue}`);

  }

  $('#newGame').click(function(e) {
    e.preventDefault();
    // score.deleteDatabase();
    let currentScore = 10;
    let questionValue = 20;
    // score.changeScore(currentScore, questionValue, displayScore);
    score.randomQuestions();
    score.populateCategories()
  });


  $('#nukeIt').click(function() {
    score.deleteDatabase();
    // score.getClues(displayClues);
  });




  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='header' id='cat" + i + "'>Category</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='0" + i + "'>$200</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='1" + i + "'>$400</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='2" + i + "'>$600</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='3" + i + "'>$800</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='4" + i + "'>$1000</div>");
  }


  $(".rows").click(function(e) {
    e.preventDefault();
    // e.stopImmediatePropagation();
    let squareName = e.target.id;
    score.retrieveQuestion(e.target.id);
    $(".btn").hide();
    $(".rows").hide();
    $(this).show();
    $(this).addClass('fullScreen');
    // $(this).text("<input id='userResponse'><button id='answer' onclick='this.evaluateAnswer(userResponse.innerHTML)'>Submit Answer</button>");


});

});
