export class Question {

 setTimer() {
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

  changeScore(currentScore, questionValue, displayScore) {
      console.log("in changeScore function");
      let num1 = currentScore;
      let num2 = questionValue;
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
  }

  isCorrect(){
    if(this.answer === userAnswer){
      clearInterval(this.time);
      return this.changeScore();
    }
  }
  //
  // gameOver(){
  //   let roundCount = 0;
  //   if(numOfQuesClicked === 30){
  //     roundCount++;
  //     alert("Round ends!");
  //   }
  //     if(roundCount === 3){
  //       alert("Game over!");
  //       roundCount = 0;
  //     }
  // }
}
