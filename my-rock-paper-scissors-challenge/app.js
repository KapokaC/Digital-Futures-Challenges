import express from 'express';
import dotenv from 'dotenv';


import { router as index } from './routes/index.js';
import { router as game } from './routes/game.js';
import { router as results } from './routes/results.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.set(`view engine`, `ejs`);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const host = process.env.HOST;

app.use('/', index);
app.use('/game', game);
app.use('/results', results);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`let the game begin RPS app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default app;

