class GameChoise {
    constructor() {
        this.choiseOptions = [...document.querySelectorAll('.game__select-option')];
        this.choice = {
            playerChoise: "",
            computerChoise: "",
        }
    }
    playerChoise() {
        this.choiseOptions.forEach(option => {
            option.style.backgroundColor = "#6C757D";
            option.addEventListener('click', () => this.selectOption(option));
        });
    }
    selectOption(option) {
        const playerSelect = option.dataset.option;
        this.choice.playerChoise = playerSelect;
        this.choiseOptions.forEach(option => {
            option.style.backgroundColor = '#6C757D';
        })

        option.style.backgroundColor = '#833ab4';
    }
    computerChoise() {
        const randomNumber = Math.floor(Math.random() * this.choiseOptions.length);
        this.choice.computerChoise = this.choiseOptions[randomNumber].dataset.option;
    }
}

export default GameChoise;