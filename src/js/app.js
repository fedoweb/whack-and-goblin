import Game from './game/Game';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.newGame();

    game.changePosition();
});
