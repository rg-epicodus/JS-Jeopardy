// import Question = require('./../js/jeopardy.js').questionModule;
import {Question} from './../js/jeopardy.js';

let q1 = new Question("Elephants are poached for the ivory of these enlarged incisors", "tusks", "600", 1, 1, "Mammals");
let q2 = new Question("Fastest land mammal", "Cheetah", "1000", 2, 1, "Mammals");

$(function() {
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div><span id=1-" + i +">$200</span></div>")
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div><span id=2-" + i +">$400</span></div>")
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div><span id=3-" + i +">$600</span></div>")
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div><span id=4-" + i +">$800</span></div>")
  }
  for(let i=0 ; i < 6 ; i ++) {
    $(".wrapper").append("<div><span id=5-" + i +">$1000</span></div>")
  }




  document.getElementById("1-600").onclick = function display() {
      $("#1-600").text(q1.question);
  }
  // document.getElementById("1-1000").onclick = function display() {
  //     $("#1-1000").text(q2.question);
  // }

});
