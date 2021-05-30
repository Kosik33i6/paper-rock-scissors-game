class Display {
    constructor() {
        this.result = document.getElementById('result');
        this.gamesNumber = document.getElementById('number-of-games');
        this.wins = document.getElementById('wins');
        this.loses = document.getElementById('loses');
        this.draw = document.getElementById('draw');
        this.stats = {
            numberOfGames: 0,
            wins: 0,
            loses: 0,
            draw: 0,
        }
    }


    // ? Add?
    // updateDisplay() {

    // }

    updateStatsText(element, statistics, index) {
        const regExpSpecialSigns = /(-)/g;
        let elementAttribute = element.getAttribute('id');
        elementAttribute = elementAttribute.charAt(0).toUpperCase() + elementAttribute.slice(1);

        if(regExpSpecialSigns.test(elementAttribute)) {
                elementAttribute = elementAttribute.replace(regExpSpecialSigns, ' ');
            }

        if(Array.isArray(statistics) && index !== undefined) {
            return element.textContent = `${elementAttribute}: ${statistics[index]}`;
        }
        element.textContent = `${elementAttribute}: ${statistics}`;
    }

    updateStatistic(elements, statistics, result) {

        if(Array.isArray(elements) && Array.isArray(statistics)) {

            elements.forEach((element, index) => {
                this.updateStatsText(element, statistics, index);
           });
        }

        // const regExpLetterAfterSign =

        // if()

        if(elements.id === 'number-of-games') {
            // let numberOfGames = statistics;
            statistics++;
            console.log(statistics);
            this.stats.numberOfGames = statistics;
            this.updateStatsText(elements, statistics);
            return;
        }
        if(elements.id == 'draw') {
            // let draw = statistics;
            // draw++;
            statistics++;
            this.stats.draw =statistics;
            this.updateStatsText(elements, statistics);
            // console.log(elements.id);
            this.result.innerHTML = `Result: You chose ${result.player} | Computer chose ${result.computer} | <span class="draw">Draw!</span>`;
        }
        if(elements.id == 'wins') {
            // let wins = statistics;
            // wins++;
            statistics++;
            this.stats.wins =statistics;
            this.updateStatsText(elements, statistics);
            this.result.innerHTML = `Result: You chose ${result.player} | Computer chose ${result.computer} | <span class="win">You win!</span>`;
        }
        if(elements.id == 'loses') {
            // let loses = statistics;
            // loses++;
            statistics++;
            this.stats.loses = statistics;
            this.updateStatsText(elements, statistics);
            this.result.innerHTML = `Result: You chose ${result.player} | Computer chose ${result.computer} | <span class="loses">You Lose!</span>`;
        }
    }
}

export default Display;