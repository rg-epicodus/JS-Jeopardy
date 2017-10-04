var firebase = require('firebase');
import { config } from './../api-keys';


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

    retrieveQuestion: function(elementId) {

      let childData = [];
      return firebase.database().ref().once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          childData.push(childSnapshot.val());
        })
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
