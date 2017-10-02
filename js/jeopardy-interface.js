import {Question} from './../js/jeopardy.js';

let q1 = new Question("Elephants are poached for the ivory of these enlarged incisors", "tusks", "600", 1, 1, "Mammals");
let q2 = new Question("Fastest land mammal", "Cheetah", "1000", 2, 1, "Mammals");

$(function() {
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'><span id=" + i +">$200</span></div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'><span id=" + i +">$400</span></div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'><span id=" + i +">$600</span></div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'><span id=" + i +">$800</span></div>");
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div class='rows' id='col" + i + "'><span id=" + i +">$1000</span></div>");
  }


  $(".rows").click(function(e) {
    e.target.innerHTML = q1.question;
    //array??
    $(this).toggleClass('fullScreen')

  });
});
