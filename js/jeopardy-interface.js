import { score } from "./../js/jeopardy.js";
import { config } from './../api-keys';

$(document).ready(function() {


  $(".wrapper").hide();
  $("#nukeIt").hide();
  $("#buzzIn,.center").hide();
  $(".pull-right").hide();
  $("#start").hide();


  function displayScore(currentScore, questionValue) {
    $('#displayScore').html(`<p>Your current score is: ${currentScore}`);
    $('#displayValue').html(`<p>Your question value is: ${questionValue}`);
  }
  $('#start').click(function(e){
    e.preventDefault();
    score.populateCategories();
    $("#start").hide();
    $("#nukeIt").show();
    $(".pull-right").show();
  });
  $('#newGame').click(function(e) {
    e.preventDefault();
    let currentScore = 10;
    let questionValue = 20;

    $(".jumbotron").hide();
    $("#newGame").hide();

    $("#buzzIn,.center").show();
    $(".wrapper").show();
    $("#start").show();

    score.randomQuestions();
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


  function addAnswer(row, col){
    let newRow = row;
    let newCol = col;
    let thing = newRow + newCol;


    return ("<input id='userResponse' required><button id='answer' type='click'>Submit Answer</button>")

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
      let myAnswerClasses = document.getElementById(row + col);
      if(newAnswer.toLowerCase().includes(stuff.toLowerCase())=== true){

        let div1 = document.createElement("div");

        div1.style.background = 'purple' ;
        div1.innerHTML = "Correct!"
        let wrapper = myAnswerClasses.parentNode;
        wrapper.insertBefore(div1, myAnswerClasses);
        myAnswerClasses.remove('fullScreen')
        $("#displayAnswer").html("Correct answer! " + newAnswer);

        $(".rows").toggle();
        //score
        var elId = parseInt(myAnswerClasses.id.split('')[0]) + 1;
        console.log(elId)
        var newScore = score.changeScore(elId);
        console.log(newScore)
        document.getElementById('score').innerHTML = newScore


        console.log("correct");

      }else {
        let div1 = document.createElement("div");
        div1.style.background = 'red' ;
        div1.innerHTML = "Incorrect!"
        let wrapper = myAnswerClasses.parentNode;
        wrapper.insertBefore(div1, myAnswerClasses);
        myAnswerClasses.remove('fullScreen')
        $("#displayAnswer").html("Wrong, the answer is: " + newAnswer);
        $(".rows").toggle();
        //score//score
        var elId = (parseInt(myAnswerClasses.id.split('')[0]) + 1) *(-1);
        var newScore = score.changeScore(elId);
        document.getElementById('score').innerHTML = newScore

      }
    });

  }

  $(".rows").click(function(e) {
    e.preventDefault();
    score.retrieveQuestion(e.target.id, addAnswer, exitTheClass, moveToFrontEnd, submit);
    $(".center").hide();
    $(".btn").hide();
    // $("#nukeIt").hide();

    $(".rows").toggle();

    $(this).show();
    $(this).addClass('fullScreen');
});

});
