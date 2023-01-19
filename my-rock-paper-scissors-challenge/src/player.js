class Player {
    #name;
    #choice;

    constructor(name, choice) {
        this.name = name;
        this.choice = choice;
    }

    getName() {
        return this.#name;
    }

    getChoice() {
        return this.#choice;
    }

}

export default Player;