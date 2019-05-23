var game = new Game();

$('#btn__reset').on('click', () => {
  game.startGame();
});

$('#qwerty').on('click', function(e){
  game.handleInteraction(e.target);
});
