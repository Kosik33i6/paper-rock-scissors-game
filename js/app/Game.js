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

        const {gamesNumber, draw, wins, loses} = this.display.stats;
        const {gamesNumber: gamesNumberTextContent, draw: drawTextContent, wins: winsTextContent, loses: losesTextContent} = this.display;

        this.display.updateStatistic([gamesNumberTextContent, drawTextContent, winsTextContent, losesTextContent], [gamesNumber, draw, wins, loses]);
    }
    startGame() {
        this.gameChoise.computerChoise();

        const {playerChoise, computerChoise} = this.gameChoise.choice;
        if(!playerChoise) {
            return alert('Select paper, rock or scissors');
        }
        this.display.updateStatistic(this.display.gamesNumber, this.display.stats.gamesNumber);

        if(playerChoise === computerChoise) {
            this.display.updateStatistic(this.display.draw, this.display.stats.draw, {player: playerChoise, computer: computerChoise});
            return;
        }
        if(playerChoise == 'paper' && computerChoise == 'rock' || playerChoise == 'rock' && computerChoise == 'scissors' || playerChoise == 'scissors' && computerChoise == 'paper') {
            this.display.updateStatistic(this.display.wins, this.display.stats.wins, {player: playerChoise, computer: computerChoise});
        } else {
            this.display.updateStatistic(this.display.loses, this.display.stats.loses, {player: playerChoise, computer: computerChoise});
        }
    }
}

export default Game;