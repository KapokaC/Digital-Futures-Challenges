import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { router as login } from './src/routes/login.js';
import { router as register } from './src/routes/register.js';
import { router as allPeeps } from './src/routes/index.js';
import { router as addPeep } from './src/routes/addPeep.js';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/login`, login);
app.use("/register", register);
app.use(`/`, allPeeps);
app.use(`/addPeep`, addPeep);

const main = async () => {
    await mongoose.connect(process.env.DB_URI).then(res => {
        console.log(`connecting to database at ${process.env.DB_URI}`)
    })
}

main().catch(error => console.log(error));

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`app listening at http://${SERVERHOST}:${SERVERPORT}`);
});

export default server; 