
export class Game {

  constructor(player, category){
      this.player = player;
      this.category = category;
  }
}

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




export let score = {

  changeScore: function(currentScore, questionValue, displayScore) {
        let num1 = currentScore;
        let num2 = questionValue;
  },
  randomQuestions: function(displayJson) {

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
                  res.json().then((chunky) => {

                   firebase.database().ref().push({
                     chunky
                    });


                     });

                  });
                });
          });
        },
// document.getElementById ("checkAllTopicCheckBoxes").addEventListener ("click", myFunction, false);

    retrieveQuestion: function(elementId) {

      let childData = [];
      return firebase.database().ref().once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          childData.push(childSnapshot.val());
        });

        console.log(childData[0].chunky[0].question);
        console.log(childData[0].chunky[0].value);
        console.log(childData[0].chunky[0].answer);
        console.log(elementId);


      });

    },

    deleteDatabase: function() {
      console.log("DELETE");
      console.log("DELETE");
      console.log("DELETE");

           firebase.database().ref().remove()
               .then( () => {
                   console.log('You have been Deleted!');
               })
               .catch( e => {
                   console.log(e.message);
               });

    },

    setTimer: function() {
       let timeLeft = 16;
       let time = setInterval(function(){
         timeLeft--;
         if(timeLeft < 10){
           timeLeft = "0" + timeLeft;
         }
         document.getElementById("timeOut").innerHTML="00:" + timeLeft;      console.log(timeLeft);
         if(timeLeft <=0){
           clearInterval(time);
           document.getElementById("timeOut").innerHTML="<p>Doh, out of time! </p>";
         }
       }, 1000);
     }
   };
