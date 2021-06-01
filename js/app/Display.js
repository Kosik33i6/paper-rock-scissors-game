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
            let elementsId = elements.id;

            if(regExpHyphen.test(elements.id)) {
                elementsId = elements.id.replace(regExpSignAndLetterAfter, function(string) {
                    return string = string.replace(regExpHyphen, "").toUpperCase();
                });
            }

            statistics++;
            this.stats[`${elementsId}`] = statistics;
            this.updateStatsText(elements, statistics);
            if(elementsId !== "numberOfGames") {
                const statsFirstLetterUppercase = elementsId.charAt(0).toUpperCase() + elementsId.slice(1);
                this.result.innerHTML = `Result: You chose ${result.player} | Computer chose ${result.computer} | <span class="${elementsId}">You ${statsFirstLetterUppercase}!</span>`;
            }
        }
    }
}

export default Display;