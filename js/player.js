export class Player {

constructor(name, timeLeft){
    this.name = name;
    this.timeLeft = 10;
  }

  setAnswerTime() {
    setInterval(() => {
      this.timeLeft--;
    }, 1000);
  }
}
