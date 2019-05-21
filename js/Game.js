/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0,
    this.phrases = [
      'Success Is Yours',
      'Be The Change',
      'Seize The Day',
      'It Is Possible',
      'Do It Now'
    ];
    this.activePhrase = null; 
  }


  startGame() {
    let overlay = $('#overlay').get();
    $(overlay[0]).css('display', 'none');

    this.activePhrase = this.getRandomPhrases();
  }


  getRandomPhrases() {
    var phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    return phrase
  }


  handleInteraction() {
    
  }


  removeLife() {

  }


  CheckForWIn() {

  }


  gameOver() {

  }



}














