var firebase = require('firebase');
// import { Config } from './api-keys';


var config = {
  apiKey: "AIzaSyDNteDOFq2R7ytg4AydC0Zny_NbU3y3R2U",
  authDomain: "jeopardy-group.firebaseapp.com",
  databaseURL: "https://jeopardy-group.firebaseio.com",
  projectId: "jeopardy-group",
  storageBucket: "jeopardy-group.appspot.com",
  messagingSenderId: "1043046133282"
};
firebase.initializeApp(config);




export class Question {
  constructor (question, answer, value, id, categoryId, categoryTitle) {
    this.question = question;
    this.answer = answer;
    this.value = value;
    this.id = id;
    this.categoryId = categoryId;
    this.categoryTitle = categoryTitle;
  }
}

export let score = {

  changeScore: function(currentScore, questionValue, displayScore) {
        let num1 = currentScore;
        let num2 = questionValue;
  },
  randomQuestions: function(displayJson) {
  let jeopardy = new Question();
    let min = Math.ceil(1);
    let max = Math.floor(18415);
    let result =  Math.floor((Math.random() * (max - min)) + min);
    let apiRequest1 = fetch(`http://jservice.io/api/categories?count=6&offset=${result}`)
        .then((res) => {
          res.json().then((test) => {
            // console.log(test);
            // console.log(test[0].id);
            for (let i = 0, len = test.length; i < len; i++)
            fetch(`http://jservice.io/api/clues?category=${test[i].id}`)
                .then((res) => {
                  res.json().then((test2) => {
                   firebase.database().ref().push({
                     test2
                    });

              console.log(test2);
                    });

                  });
                });
          });
        }


  };
