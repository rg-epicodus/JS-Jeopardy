
import {Question} from './../js/jeopardy.js';
import { score } from "./../js/jeopardy.js";
// import { masterFirebaseConfig } from './api-keys';

$(document).ready(function() {
  sessionStorage.setItem('homies', [1,2,3,4,4,5]);

  $(".wrapper").hide();

  function displayScore(currentScore, questionValue) {
    $('#displayScore').html(`<p>Your current score is: ${currentScore}`);
    $('#displayValue').html(`<p>Your question value is: ${questionValue}`);

  }

  $('#userInputQuery').submit(function(e) {
    e.preventDefault();
    let currentScore = 10;
    let questionValue = 20;
    // score.changeScore(currentScore, questionValue, displayScore);
    //score.randomQuestions();
    score.retrieveQuestion();
    // score.getClues(displayClues);
  });

  //Start a new game
  $('#startNewGame').submit(function(e) {
    e.preventDefault();
    let currentScore = 10;
    let questionValue = 20;
    $(".wrapper").show();
   score.retrieveQuestion();
  });


  $('#nukeIt').click(function() {
    score.deleteDatabase();
    // score.getClues(displayClues);
  });

// let q1 = new Question("Elephants are poached for the ivory of these enlarged incisors", "tusks", "600", 1, 1, "Mammals");
// let q2 = new Question("Fastest land mammal", "Cheetah", "1000", 2, 1, "Mammals");
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
    e.stopImmediatePropagation();
    let squareName = e.target.id;
    score.retrieveQuestion(e.target.id);
    // console.log(e.target.id)





    // e.target.innerHTML = q1.question;

    //array??
    $(this).toggleClass('fullScreen');

  //   $(this).append("<br><br><div id='questionContainer'><input id='question'><br><button type='submit' class='btn'>Submit</button></div>")
  // });
  //
  // $("#question").click(function(e){
  //   console.log("hey");
  // })

});

});
