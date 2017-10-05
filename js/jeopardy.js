var firebase = require('firebase');
import { config } from './../api-keys';


firebase.initializeApp(config);


export let score = {
  randomQuestions: function(displayJson) {
    let min = Math.ceil(1);
    let max = Math.floor(18415);
    let result =  Math.floor((Math.random() * (max - min)) + min);
    let apiRequest1 = fetch(`http://jservice.io/api/categories?count=6&offset=${result}`)
      .then((res) => {
        res.json().then((test) => {
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

    retrieveQuestion: function(elementId,addAnswer) {
      let coorArray=elementId.split('');
      let row = coorArray[0];
      let col = coorArray[1];
      let childData = [];
      addAnswer(col, row)
      return firebase.database().ref().once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          childData.push(childSnapshot.val());
        })


        document.getElementById(elementId).innerHTML = childData[col].chunky[row].question + "<input id='userResponse'><button id='answer' type='submit'>Submit Answer</button>" ;

        $("#answer").click((e) => {
          e.preventDefault();
          let stuff = $("#userResponse").val().replace(/[^0-9<>a-z]/gi, '');
          let newAnswer = childData[col].chunky[row].answer.replace(/[^0-9<>a-z]/gi, '');


          if (newAnswer.toLowerCase().includes(stuff.toLowerCase()) === true) {
            e.originalEvent.path[1].remove('fullScreen');
            // console.log(e.path.classList[1].remove());
            console.log("correct");
          } else {
            console.log("nope");
          }
        })
      })
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
    },

    changeScore: function(currentScore, questionValue, displayScore) {
          let num1 = currentScore;
          let num2 = questionValue;
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
