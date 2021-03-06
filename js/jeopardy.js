var firebase = require('firebase');
import { config } from './../api-keys';


firebase.initializeApp(config);


export let score = {
  playerScore: 0,

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

    retrieveQuestion: function(elementId, addAnswer, exitTheClass, moveToFrontEnd, submit) {
      let coorArray=elementId.split('');
      let row = coorArray[1];
      let col = coorArray[0];
      let childData = [];
      return firebase.database().ref().once('value').then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          childData.push(childSnapshot.val());
        })

        document.getElementById(elementId).innerHTML = moveToFrontEnd(childData, col, row) + addAnswer(col, row);
        this.setTimer();
        submit(childData, row, col)

      })
    },

    populateCategories: function() {
      let childData = [];
      return firebase.database().ref().once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          childData.push(childSnapshot.val());
        })


      document.getElementById('cat0').innerHTML = childData[0].chunky[0].category.title.toUpperCase();
      document.getElementById('cat1').innerHTML = childData[1].chunky[0].category.title.toUpperCase();
      document.getElementById('cat2').innerHTML = childData[2].chunky[0].category.title.toUpperCase();
      document.getElementById('cat3').innerHTML = childData[3].chunky[0].category.title.toUpperCase();
      document.getElementById('cat4').innerHTML = childData[4].chunky[0].category.title.toUpperCase();
      document.getElementById('cat5').innerHTML = childData[5].chunky[0].category.title.toUpperCase();
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
    changeScore: function(elId) {
          return this.playerScore += elId*200;
    },

    setTimer: function(addAnswer) {
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
}
