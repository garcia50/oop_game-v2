class Phrase {
  constructor(phrase) {
    //sets phrase variable after making them lowercase
    this.phrase = phrase.toLowerCase();
  }


  //As the name suggests, adds phrase to display
  addPhraseToDisplay() {
    //seperates the letters and spacing
    let letters = this.phrase.split('');
    //set empty template literal to variable
    let phraseUl = ``;

    //iterates through letters and creates a list object while simultaneously adding it to the template literal
    letters.forEach(letter => {
      if (letter.charAt(0) === ' ') {
        phraseUl += `<li class="space"> </li>`;
      } else {
        phraseUl += `<li class="hide letter ${letter}">${letter}</li>`;
      }
    });
    //adds phraseUl to html
    $('#phrase ul').append(phraseUl);
  }


  //checks if user chosen letter exist in the phrase
  checkLetter(button, selectedLetter) {
    let isChosen = true;
    //iterates through phrase and adds 'chosen' class if there is a match
    if (this.phrase.indexOf(selectedLetter) >= 0) {
      $(button).addClass('chosen');
      //displays letter to user if they guessed right
      this.showMatchedLetter(selectedLetter)
      isChosen = true;
    //iterates through phrase and adds 'wrong' class if there is no match
    } else if ($(button).attr('class') === 'key') {
      $(button).addClass('wrong');
      isChosen = false;
    } 
    return isChosen
  }


  //replaces class depending on whether or not user guessed correctly 
  showMatchedLetter(letter) {
    $(".letter").each(function(index) {
      if (this.innerText === letter) {
        $(this).removeClass('hide');
        $(this).addClass('show');
      }
    });
  }
}
