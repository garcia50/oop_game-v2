/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


var game;

$('#btn__reset').on('click', () => {
  game = new Game();
  game.startGame();
});

$('#qwerty button').on('click', function(e){
  game.handleInteraction(e.target.innerText);
});
