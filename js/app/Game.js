import GameChoise from './GameChoise.js';
class Game {
    constructor() {
        this.btnStartGame = document.getElementById('start-game');
        this.gameChoise = new GameChoise();
    }
    init() {
        this.btnStartGame.addEventListener('click', () => this.startGame());
        this.gameChoise.playerChoise();

    }
    startGame() {
        this.gameChoise.computerChoise();
        console.log(this.gameChoise);
        if(!this.gameChoise.choice.playerChoise) {
            return alert('Select paper, rock or scissors');
        }

    }
}

export default Game;