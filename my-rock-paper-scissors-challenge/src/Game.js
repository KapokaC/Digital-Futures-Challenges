import Player from "./player.js";
class Game {
    player
    computerTurn;
    result;

    constructor() {
        this.player = null;
        this.computerTurn = "";
        this.result = "";
    };

    createPlayer(name, choice) {
        this.player = new Player(name, choice);
    }

    computer() {
        let x = Math.floor(Math.random() * 3);

        if (x === 0) { this.computerTurn = "rock"; };

        if (x === 1) { this.computerTurn = "paper"; };

        if (x === 2) { this.computerTurn = "scissors"; };

        return this.computerTurn
    };

    calculateResults() {

        if (this.player.choice === this.computerTurn) { this.result = 'draw'; }

        if (this.player.choice === "rock" && this.computerTurn === "paper") { this.result = "lose"; }

        if (this.player.choice === "scissors" && this.computerTurn === "rock") { this.result = "lose"; }

        if (this.player.choice === "paper" && this.computerTurn === "scissors") { this.result = "lose"; }

        if (this.player.choice === "paper" && this.computerTurn === "rock") { this.result = "win"; }

        if (this.player.choice === "scissors" && this.computerTurn === "paper") { this.result = "win"; }

        if (this.player.choice === "rock" && this.computerTurn === "scissors") { this.result = "win"; }

        return this.result;

    }

}

export default Game;