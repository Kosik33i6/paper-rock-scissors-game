import Display from './Display.js';
import GameChoise from './GameChoise.js';
class Game {
    constructor() {
        this.btnStartGame = document.getElementById('start-game');
        this.gameChoise = new GameChoise();
        this.display = new Display();
    }
    init() {
        this.btnStartGame.addEventListener('click', () => this.startGame());
        this.gameChoise.playerChoise();

    }
    startGame() {
        this.gameChoise.computerChoise();

        if(!this.gameChoise.choice.playerChoise) {
            return alert('Select paper, rock or scissors');
        }

        const {playerChoise, computerChoise} = this.gameChoise.choice;

        if(playerChoise === computerChoise) {
            this.display.stats.draw++;
            this.display.draw.textContent = `Draw: ${this.display.stats.draw}`;
            this.display.result.textContent = `Result: You chose ${playerChoise} | Computer chose ${computerChoise}| Draw!`;
            return;
        }
        if(playerChoise == 'paper' && computerChoise == 'rock' || playerChoise == 'rock' && computerChoise == 'scissors' || playerChoise == 'scissors' && computerChoise == 'paper') {
            this.display.stats.wins++;
            this.display.wins.textContent = `Wins: ${this.display.stats.wins}`;
            this.display.result.textContent = `Result: You chose ${playerChoise} | Computer chose ${computerChoise} | You win!`;
        } else {
            this.display.stats.loses++;
            this.display.loses.textContent = `Loses: ${this.display.stats.loses}`;
            this.display.result.textContent = `Result: You chose ${playerChoise} | Computer chose ${computerChoise} | You Lose!`;
        }
    }
}

export default Game;