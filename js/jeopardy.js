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
        console.log("in changeScore function");
        let num1 = currentScore;
        let num2 = questionValue;
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
  },

  randomQuestions: function(displayJson) {
    console.log("in randomQuestion function");
    let min = Math.ceil(1);
    let max = Math.floor(18415);
    let result =  Math.floor((Math.random() * (max - min)) + min);
    console.log(result);
    let apiRequest1 = fetch(`http://jservice.io/api/categories?count=6&offset=${result}`)
        .then((res) => {
          res.json().then((test) => {
            console.log(test);
            console.log(test[0].id);
            for (let i = 0, len = test.length; i < len; i++)
            fetch(`http://jservice.io/api/clues?category=${test[i].id}`)
                .then((res) => {
                  res.json().then((test2) => {
                    console.log(test2);
                  });
                });
          });
        })
        .catch(console.log);
  },

  // getClues: function(randomQuestions) {
  //   console.log("in getClues function");
  //     let apiRequest2 = fetch(`http://jservice.io/api/clues?category=${test.id}`)
  //         .then((res) => {
  //           res.json().then((test2) => {
  //             console.log("test2");
  //           });
  //         })
  // }



};
