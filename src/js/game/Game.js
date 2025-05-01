import Character from './Character';

export default class Game {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.character = new Character();
    this.randomPosition = null;
  }

    newGame() {
        this.drawBoard(this.boardSize);
        this.getRandomPosition(this.getMaxPosition());
        this.character.drawCharacter(this.randomPosition);
    }

    changePosition() {
        setInterval(() => {
            this.character.removeCharacter(this.randomPosition);
            this.getRandomPosition(this.getMaxPosition());
            this.character.drawCharacter(this.randomPosition);
        }, 1500);
    }

    drawBoard(boardSize) {
        const gameContainer = document.querySelector('.game_container');
        gameContainer.innerHTML = '';

        this.container = document.createElement('div');
        this.container.classList.add('board_container');
        this.container.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
        this.container.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

        for (let i = 0; i < this.boardSize * this.boardSize; i += 1) {
            const cell = document.createElement('div');
            cell.classList.add('board_cell');
            cell.setAttribute('data-id', i);
            this.container.appendChild(cell);
        }

        gameContainer.appendChild(this.container);
    }

    getMaxPosition() {
        return (this.boardSize ** 2) - 1;
    }

    getRandomPosition(maxPosition) {
        const position = Math.floor(Math.random() * maxPosition);

        if (position !== this.randomPosition) {
            this.randomPosition = position;
        } else {
            this.getRandomPosition(maxPosition);
        }
    }
}
