import {Question} from './../js/jeopardy.js'

describe('Question', function() {

  it('should test instantiation of new question', function() {
    let testQuestion = new Question("2+2", "4", "600", 1, 1, "Arithmetic")
    expect(testQuestion.answer).toEqual("4");
  })
})
