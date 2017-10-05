import { score } from "./../js/jeopardy.js";
import { config } from './../api-keys';

$(document).ready(function() {


  $(".wrapper").hide();
  $("#nukeIt").hide();
  $("#buzzIn,.center").hide();
  $(".pull-right").hide();


  function displayScore(currentScore, questionValue) {
    $('#displayScore').html(`<p>Your current score is: ${currentScore}`);
    $('#displayValue').html(`<p>Your question value is: ${questionValue}`);
  }

  $('#newGame').click(function(e) {
    e.preventDefault();
    let currentScore = 10;
    let questionValue = 20;

    $(".jumbotron").hide();
    $("#newGame").hide();
    $("#nukeIt").show();
    $(".pull-right").show();
    $("#buzzIn,.center").show();
    $(".wrapper").show();


    score.randomQuestions();
    score.populateCategories();
  });

  $('#nukeIt').click(function() {
    score.deleteDatabase();
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

  //clear score
  // function updateScore(){
  //   $('#score').empty().text(score);
  // }

  function addAnswer(row, col){
    console.log("in outside addAnswer");
    let newRow = row;
    let newCol = col;
    let thing = newRow + newCol;


    return ("<input id='userResponse'><button id='answer' type='click'>Submit Answer</button>")

   };

   function exitTheClass(e){
     $(".rows").show();
  };

  function moveToFrontEnd(childData, row, col){
    return childData[col].chunky[row].question;
  };

  function submit(childData, col, row){
    $("#answer").click((e)=>{
      e.preventDefault();
      let newAnswer = childData[col].chunky[row].answer.replace(/[^0-9<>a-z]/gi, '');
      let stuff = $("#userResponse").val().replace(/[^0-9<>a-z]/gi, '');
      let myAnswerClasses = document.getElementById(col + row);
      if(newAnswer.toLowerCase().includes(stuff.toLowerCase())=== true){

        let div1 = document.createElement("div");
        let wrapper = myAnswerClasses.parentNode;
        wrapper.insertBefore(div1, myAnswerClasses);
        myAnswerClasses.remove('fullScreen')




        $(".rows").toggle();
        console.log("correct");

      }else {
        console.log("nope");
      }
    });

  }

  $(".rows").click(function(e) {
    e.preventDefault();
    score.retrieveQuestion(e.target.id, addAnswer, exitTheClass, moveToFrontEnd, submit);
    $(".center").hide();
    $(".btn").hide();
    $("#nukeIt").hide();

    $(".rows").toggle();

    $(this).show();
    $(this).addClass('fullScreen');
});

});
