import Game from '../src/Game.js';
import chai, { expect } from 'chai';

describe(`Testing the Game class`, () => {

    it(`Test the value of a new object Game`, () => {

        const game = new Game();
        expect(game.player).to.be.equal(null);
        expect(game.computerTurn).to.be.equal("");
        expect(game.result).to.be.equal("");

    })

    it(`Should test the create player method`, () => {

        const game = new Game();
        game.createPlayer(`Wendy`, `rock`);
        expect(game.player.name).to.equal(`Wendy`);
        expect(game.player.choice).to.equal(`rock`)

    })


    it(`Should test the computer random method`, () => {

        const game = new Game();
        const expected = game.computer();
        expect(game.computerTurn).to.be.equal(expected)

    })

    it(`Should test the result method`, () => {

        const game = new Game();
        game.createPlayer('Cleo', 'rock')
        game.computer();
        const result = game.calculateResults()
        expect(result).to.be.a("string")

    })

    it(`Should return a correct string if player wins`, () => {

        const game = new Game();
        game.createPlayer(`Wendy`, `rock`);
        game.computerTurn = 'scissors';
        const result = game.calculateResults();
        expect(result).to.equal(`win`);
    })

    it(`Should return a correct string if player lose`, () => {

        const game = new Game();
        game.createPlayer(`Wendy`, `scissors`);
        game.computerTurn = 'rock';
        const result = game.calculateResults();
        expect(result).to.equal(`lose`);
    })
})