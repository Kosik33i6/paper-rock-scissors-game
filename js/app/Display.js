class Display {
    constructor() {
        this.result = document.getElementById('result');
        this.gamesNumber = document.getElementById('games-number');
        this.wins = document.getElementById('win');
        this.loses = document.getElementById('lose');
        this.draw = document.getElementById('draw');
        this.stats = {
            gamesNumber: 0,
            wins: 0,
            loses: 0,
            draw: 0,
        }
    }
}

export default Display;