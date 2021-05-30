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

        const {numberOfGames, draw, win, lose} = this.display.stats;
        const {gamesNumber: gamesNumberTextContent, draws: drawTextContent, wins: winsTextContent, loses: losesTextContent} = this.display;

        this.display.updateStatistic([gamesNumberTextContent, drawTextContent, winsTextContent, losesTextContent], [numberOfGames, draw, win, lose]);
    }
    startGame() {
        this.gameChoise.computerChoise();

        const {playerChoise: player, computerChoise: computer} = this.gameChoise.choice;

        if(!player) {
            return alert('Select paper, rock or scissors');
        }
        this.display.updateStatistic(this.display.gamesNumber, this.display.stats.numberOfGames);

        if(player === computer) {
            this.display.updateStatistic(this.display.draws, this.display.stats.draw, {player, computer});
            return;
        }
        if(player == 'paper' && computer == 'rock' || player == 'rock' && computer == 'scissors' || player == 'scissors' && computer == 'paper') {
            this.display.updateStatistic(this.display.wins, this.display.stats.win, {player, computer});
        } else {
            this.display.updateStatistic(this.display.loses, this.display.stats.lose, {player, computer});
        }
    }
}

export default Game;