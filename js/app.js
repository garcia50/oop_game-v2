let game;

$('#btn__reset').on('click', () => {
  game = new Game();
  game.startGame();
});

$('#qwerty').on('click', function(e){
  game.handleInteraction(e.target);
});
