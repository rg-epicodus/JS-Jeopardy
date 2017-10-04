
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
            console.log(test);
            console.log(test.length);
            // console.log(test[0].id);

            for (let i = 0, len = test.length; i < len; i++)
            fetch(`http://jservice.io/api/clues?category=${test[i].id}`)
                .then((res) => {
                  res.json().then((chunky) => {
                    console.log(this);
                   firebase.database().ref().push({
                     chunky
                    });


                     });

                  });
                });
          });
        },

    retrieveQuestion: function(elementId) {
      let coorArray=elementId.split('');
      let row=coorArray[0];
      let col=coorArray[1];
      let childData = [];
      return firebase.database().ref().once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          childData.push(childSnapshot.val());
        })

        document.getElementById(elementId).innerHTML = childData[col].chunky[row].question + "<input id='userResponse'><button id='answer' type='submit'>Submit Answer</button>" ;

        $("#answer").click((e) => {
          e.preventDefault();
          let stuff = $("#userResponse").val().replace(/[^0-9<>a-z]/gi, '');
          let newAnswer = childData[col].chunky[row].answer.replace(/[^0-9<>a-z]/gi, '');
          console.log(newAnswer.toLowerCase());
          if (newAnswer.toLowerCase().includes(stuff.toLowerCase()) === true) {
            console.log("correct");
          } else {
            console.log("nope");
          }
        })


      })

    },

    evaluateAnswer: function(stuff) {
        console.log(this.childData[col].chunky[row].answer);
        // document.getElementById(elementId).innerHTML = childData[col].chunky[row].answer;
    },

    populateCategories: function() {
      let childData = [];
      return firebase.database().ref().once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          childData.push(childSnapshot.val());
        })

      console.log(childData[0].chunky[0].category.title)
      document.getElementById('cat0').innerHTML = childData[0].chunky[0].category.title;
      document.getElementById('cat1').innerHTML = childData[1].chunky[0].category.title;
      document.getElementById('cat2').innerHTML = childData[2].chunky[0].category.title;
      document.getElementById('cat3').innerHTML = childData[3].chunky[0].category.title;
      document.getElementById('cat4').innerHTML = childData[4].chunky[0].category.title;
      document.getElementById('cat5').innerHTML = childData[5].chunky[0].category.title;
    })
    },

    deleteDatabase: function() {
     firebase.database().ref().remove()
         .then( () => {
             console.log('You have been Deleted!');
         })
         .catch( e => {
             console.log(e.message);
         });
    }



      }
