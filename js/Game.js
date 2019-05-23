class Game {
  constructor(missed, phrases, activePhrase) {
    //starting point of 'missed' life the user has
    this.missed = 0,
    //phrases the user has to guess
    this.phrases = [
      'Success Is Yours',
      'Be The Change',
      'Seize The Day',
      'It Is Possible',
      'Do It Now'
    ];
    //the phrase that is in play 
    this.activePhrase = null; 
  }

  
  startGame() {
    //clears out and resets all previous data if any
    this.reload();
    //removes start overlay
    $('#overlay').css('display', 'none');
    //sets random phrase
    this.activePhrase = this.getRandomPhrases();
    //initiates an Instance of the Phrase class and passes it the randomly chosen phrase
    this.activePhrase = new Phrase(this.activePhrase)
    //adds phrase to diplay
    this.activePhrase.addPhraseToDisplay();
  }


  //randomly selects phrase
  getRandomPhrases() {
    var phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    return phrase
  }


  //manages gameplay
  handleInteraction(button) {
    //diasbles clicked buttons
    button.disabled = true;
    //sets button context to variable
    var letter = button.textContent

    //simultaniously checks letter and sets isChosen variable too true or false
    let isChosen = this.activePhrase.checkLetter(button, letter);
    //checks if user won game or not
    if (isChosen) {
      if ( this.CheckForWin() ) {
        this.gameOver();
      }
    } else {
      //removes life 'heart'
      this.removeLife();
    }
  }


  //tracks score/life 
  removeLife() {
    //removes life 'blue heart' and replaces it with a 'grey heart'
    $('#scoreboard li:first-child').remove();
    $('#scoreboard').append('<li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>');
    //tracks the life of the user
    this.missed += 1
    if (this.missed === 5){
      this.gameOver();
    }
  }


  //checks if the user won after guessing the entire phrase and return either true or false
  CheckForWin() {
    if ($('#phrase .hide').length > 0) {
      return false;  
    }
    return true
  }


  //Determines whether the user won or lost and seperates view outcome
  gameOver() {
    let hasVictory = this.CheckForWin();
    $('#overlay').css('display', 'block');
    //if user won, they are prompted with:
    if (hasVictory) {
      $('#overlay').removeClass('start');
      $('#overlay').addClass('win');
      $('#game-over-message').text('YOU WIN!!!');
      //if a player lost, they are prompted with:
    } else {
      $('#overlay').removeClass('start');
      $('#overlay').addClass('lose');
      $('#game-over-message').text('Try Again');
    }
  }


  //reloads/refreshes the game after player restarts the game
  reload() {
    this.missed = 0
    $('#phrase ul').empty();
    $('#qwerty button').removeClass('wrong').addClass('key');
    $('#qwerty button').removeClass('chosen').addClass('key');
    $(':button').prop('disabled', false);
    $('#scoreboard li').remove();
    for (var i = 0; i < 5; i++) {
      $('#scoreboard ol').append('<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>');
    }
    $('#overlay').removeClass('win');
    $('#overlay').removeClass('lose');
    $('#overlay').addClass('start');
  }
}
