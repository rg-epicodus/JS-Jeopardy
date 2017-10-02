// import Question = require('./../js/jeopardy.js').questionModule;
import {Question} from './../js/jeopardy.js';

let q1 = new Question("Elephants are poached for the ivory of these enlarged incisors", "tusks", "600", 1, 1, "Mammals");
let q2 = new Question("Fastest land mammal", "Cheetah", "1000", 2, 1, "Mammals");

$(function() {


  document.getElementById("1-600").onclick = function display() {
    //
    // $("#1-600").onClick(function(event){
    //   event.preventDefault();
      // let question1 = q1.question;
      $("#1-600").text(q1.question);
  }


});
