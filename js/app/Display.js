class Display {
    constructor() {
        this.result = document.getElementById('result');
        this.gamesNumber = document.getElementById('number-of-games');
        this.wins = document.getElementById('wins');
        this.loses = document.getElementById('loses');
        this.draw = document.getElementById('draw');
        this.stats = {
            gamesNumber: 0,
            wins: 0,
            loses: 0,
            draw: 0,
        }
    }
    updateStatistic(elements, statistics, result) {
        console.log(elements);
        if(Array.isArray(elements) && Array.isArray(statistics)) {

            elements.forEach((element, index) => {
                const regExSpecialSigns = /(-)/g;
                let elementAttribute = element.getAttribute('id');

                elementAttribute = elementAttribute.charAt(0).toUpperCase() + elementAttribute.slice(1);
                elementAttribute = elementAttribute.replace(regExSpecialSigns, ' ');

                element.textContent = `${elementAttribute}: ${statistics[index]}`;
           });
        }
        if(elements.id === 'number-of-games') {
            let numberOfGames = statistics;
            numberOfGames++;
            this.stats.gamesNumber = numberOfGames;
            this.gamesNumber.textContent = `Number of games: ${numberOfGames}`;
            return;
        }
        if(elements.id == 'draw') {
            let draw = statistics;
            draw++;
            this.stats.draw = draw;
            this.draw.textContent = `Draw: ${draw}`;
            this.result.textContent = `Result: You chose ${result.player} | Computer chose ${result.computer} | Draw!`;
        }
        if(elements.id == 'wins') {
            let wins = statistics;
            wins++;
            this.stats.wins = wins;
            this.wins.textContent = `Wins: ${wins}`;
            this.result.textContent = `Result: You chose ${result.player} | Computer chose ${result.computer} | You win!`;
        }
        if(elements.id == 'loses') {
            let loses = statistics;
            loses++;
            this.stats.loses = loses;
            this.loses.textContent = `Loses: ${loses}`;
            this.result.textContent = `Result: You chose ${result.player} | Computer chose ${result.computer} | You Lose!`;
        }
    }
}

export default Display;