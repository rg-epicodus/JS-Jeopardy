import {Question} from './../js/jeopardy.js';

let q1 = new Question("Elephants are poached for the ivory of these enlarged incisors", "tusks", "600", 1, 1, "Mammals");
let q2 = new Question("Fastest land mammal", "Cheetah", "1000", 2, 1, "Mammals");

$(function() {
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'>$200</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'>$400</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'>$600</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'>$800</div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'>$1000</div>");
  }


  $(".rows").click(function(e) {

    e.target.innerHTML = q1.question;

    //array??
    $(this).toggleClass('fullScreen');
  //   $(this).append("<br><br><div id='questionContainer'><input id='question'><br><button type='submit' class='btn'>Submit</button></div>")
  // });
  //
  // $("#question").click(function(e){
  //   console.log("hey");
  // })

});
