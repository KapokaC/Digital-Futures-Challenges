import express from 'express';
export const router = express.Router();


router.post('/', (req, res) => {
    const name = req.body.player;
    req.app.locals.name = name;

    res.redirect('/game')
})

router.get('/', (req, res) => {
    //const player = req.app.locals.name;
    res.render('game', {
        //name: player,
        name: req.app.locals.name,

    });
})
