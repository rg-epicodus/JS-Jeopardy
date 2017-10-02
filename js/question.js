export class Question {

  constructor (question, answer, value, id, categoryId, categoryTitle, timeLeft) {
    this.question = question;
    this.answer = answer;
    this.value = value;
    this.id = id;
    this.categoryId = categoryId;
    this.categoryTitle = categoryTitle;
    this.timeLeft = 15;
  }

  setAnswerTime() {
    setInterval(() => {
      this.timeLeft--;
    }, 1000);
  }

  isCorrect(){
    let totalScore = 0;
    if(question.answer === userAnswer){
      totalScore += changeScore(amount);
    }else{
      totalScore -= changeScore(amount);
    }
    return totalScore;
  }

  gameOver(){
    if(numOfQuesClicked === 30){
      alert("Round ends!");
    }
  }
}
