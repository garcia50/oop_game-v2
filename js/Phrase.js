/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }


  addPhraseToDisplay() {
    let letters = this.phrase.split('');
    let phraseUl = ``;

    letters.forEach(letter => {
      if (letter.charAt(0) === ' ') {
        phraseUl += `<li class="space"> </li>`;
      } else {
        phraseUl += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
    $('#phrase ul').append(phraseUl);
  }


  checkLetter(button, selectedLetter) {
    let isChosen = true;
    if (this.phrase.indexOf(selectedLetter) >= 0) {
      $(button).addClass('chosen');
      this.showMatchedLetter(selectedLetter)
      isChosen = true;
    } else if ($(button).attr('class') === 'key') {
      $(button).addClass('wrong');
      isChosen = false;
    } 
    return isChosen
  }


  showMatchedLetter(letter) {
    $(".letter").each(function(index) {
      if (this.innerText === letter) {
        $(this).removeClass('hide');
        $(this).addClass('show');
      }
    });
  }

}

