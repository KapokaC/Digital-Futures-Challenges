import express from 'express';
import Peep from '../models/peepSchema.js';

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {

        Peep.find().sort({ datePosted: -1 }).find((error, allPeeps) => {
            console.log(allPeeps);
            error ? res.status(404).json.send(`Peeps not found`) : res.json(allPeeps);
        });
    });