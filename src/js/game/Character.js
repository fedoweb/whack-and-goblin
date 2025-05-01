export default class Character {
    constructor() {
        this.character = null;
    }

    drawCharacter(position) {
        this.createCharacter();
        this.addCharacter(position);
    }

    createCharacter() {
        this.character = document.createElement('img');
        this.character.src = '/pic/goblin.png';
        this.character.classList.add('goblin');
        this.character.alt = 'Goblin character';
        }

    addCharacter(position) {
        const cell = document.querySelector(`[data-id="${position}"]`);
        if (cell) {
            cell.appendChild(this.character);
        }
    }

    removeCharacter(position) {
        const cell = document.querySelector(`[data-id="${position}"]`);
        cell.removeChild(this.character);
    }
}
