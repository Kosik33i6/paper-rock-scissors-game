class Display {
    constructor() {
        this.result = document.getElementById('result');
        this.wins = document.getElementById('win');
        this.loses = document.getElementById('lose');
        this.draw = document.getElementById('draw');
        this.stats = {
            wins: 0,
            loses: 0,
            draw: 0,
        }
    }
    // updateStatistic() {

    // }

}

export default Display;