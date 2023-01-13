import express from 'express';
import Peep from '../models/peepSchema.js';

export const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const savePeep = new Peep(req.body);
        savePeep.save(err => {
            if (err) {
                res.send(err);

            } else {
                res.send({ message: `Peep successfully added` })
            }
        });

    });
