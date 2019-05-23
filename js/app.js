//set variable
let game;

//add a listener to start game
$('#btn__reset').on('click', () => {
  game = new Game();
  game.startGame();
});

//add listener to handle user interaction
$('#qwerty').on('click', function(e){
  game.handleInteraction(e.target);
});
