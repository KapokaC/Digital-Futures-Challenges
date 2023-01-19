import express from 'express';
export const router = express.Router();

import Game from '../src/Game.js'

router.post('/', (req, res) => {
    const game = new Game();

    const choice = req.body.choice;
    req.app.locals.choice = choice;

    const name = req.app.locals.name;

    game.createPlayer(name, choice)
    game.computer();
    const result = game.calculateResults();

    res.render('results', {
        playerChoice: req.app.locals.choice,
        name: req.app.locals.name,
        resultDone: result,
        computerChoice: game.computerTurn
    })
})