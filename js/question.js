export class Question {

  constructor (question, answer, value, id, categoryId, categoryTitle) {
    this.question = question;
    this.answer = answer;
    this.value = value;
    this.id = id;
    this.categoryId = categoryId;
    this.categoryTitle = categoryTitle;
  }


 setTimer() {
    let timeLeft =16;
    let time = setInterval(function(){
      timeLeft--;
      console.log(timeLeft);
      if(timeLeft <=0){
        clearInterval(time);
        return console.log("out of time");
      }
    }, 1000);
  }

  // isCorrect(){
  //   let totalScore = 0;
  //   if(question.answer === userAnswer){
  //     totalScore += changeScore(amount);
  //   }else{
  //     totalScore -= changeScore(amount);
  //   }
  //   return totalScore;
  // }
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
