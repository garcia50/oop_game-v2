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
    $('#overlay').css('display', 'none');

    this.activePhrase = this.getRandomPhrases();
    this.activePhrase = new Phrase(this.activePhrase)

    this.activePhrase.addPhraseToDisplay();
  }


  getRandomPhrases() {
    var phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    return phrase
  }


  handleInteraction(button) {
    button.disabled = true;
    var letter = button.textContent

    let isChosen = this.activePhrase.checkLetter(button, letter);
    if (isChosen) {
      if ( this.CheckForWin() ) {
        this.gameOver();
      }
    } else {
      this.removeLife();
    }
  }


  removeLife() {
    $('#scoreboard li:first-child').remove();
    $('#scoreboard').append('<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>');

    this.missed += 1
    if (this.missed === 5){
      this.gameOver();
    }
  }


  CheckForWin() {
    if ($('#phrase .hide').length > 0) {
      return false;  
    }
    return true
  }


  gameOver() {
    let hasVictory = this.CheckForWin();
    $('#overlay').css('display', 'block');
    
    if (hasVictory) {
      $('#game-over-message').text('YOU WIN!!!');
    } else {
      $('#game-over-message').text('Try Again');
    }

  }



}














