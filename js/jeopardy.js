export let score = {



  // changeScore: function(currentScore, questionValue, displayScore) {
  //       console.log("in changeScore function");
  //
  //       let num1 = currentScore;
  //       let num2 = questionValue;
  //       console.log(`${num1} + ${num2} = ${num1 + num2}`);
  //
  // },

  randomQuestions: function(displayJson) {
    let min = Math.ceil(1);
    let max = Math.floor(18415);
    let result =  Math.floor((Math.random() * (max - min)) + min);
    console.log(result);
    let value = 400;
    let apiRequest1 = fetch(`http://jservice.io/api/categories?count=6&offset=${result}`)
        .then((res) => {
          res.json().then((test) => {
            console.log(test);
          });
        })
        .catch(console.log);
      },



};
