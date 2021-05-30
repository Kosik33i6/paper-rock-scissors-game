class Display {
    constructor() {
        this.result = document.getElementById('result');
        this.gamesNumber = document.getElementById('number-of-games');
        this.wins = document.getElementById('win');
        this.loses = document.getElementById('lose');
        this.draws = document.getElementById('draw');
        this.stats = {
            numberOfGames: 0,
            win: 0,
            lose: 0,
            draw: 0,
        }
    }

    updateStatsText(element, statistics, index) {
        const regExpHyphen = /(-)/g;
        let elementAttribute = element.getAttribute('id');
        console.log(elementAttribute);
        elementAttribute = elementAttribute.charAt(0).toUpperCase() + elementAttribute.slice(1);

        if(regExpHyphen.test(elementAttribute)) {
                elementAttribute = elementAttribute.replace(regExpHyphen, ' ');
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
        } else {
            const regExpSignAndLetterAfter = /(-=?)[a-z]/g;
            const regExpHyphen = /(-)/g;

            if(regExpHyphen.test(elements.id)) {
                elements.id = elements.id.replace(regExpSignAndLetterAfter, function(string) {
                    return string = string.replace(regExpHyphen, "").toUpperCase();
                });
            }
            statistics++;
            this.stats[`${elements.id}`] = statistics;
            this.updateStatsText(elements, statistics);
            console.log(elements.id);
            if(elements.id !== "numberOfGames") {
                const statsFirstLetterUppercase = elements.id.charAt(0).toUpperCase() + elements.id.slice(1);
                this.result.innerHTML = `Result: You chose ${result.player} | Computer chose ${result.computer} | <span class="${elements.id}">You ${statsFirstLetterUppercase}!</span>`;
            }
        }
    }
}

export default Display;