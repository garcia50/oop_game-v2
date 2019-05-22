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

// <div id="phrase" class="section">
//     <ul>
//         <li class="hide letter h">h</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter w">w</li>
//         <li class="space"> </li>
//         <li class="hide letter a">a</li>
//         <li class="hide letter r">r</li>
//         <li class="hide letter e">e</li>
//         <li class="space"> </li>
//         <li class="hide letter y">y</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter u">u</li>
//     </ul>
// </div>