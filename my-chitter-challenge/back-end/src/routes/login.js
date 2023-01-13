import express from 'express';
import User from '../models/userSchema.js';
import { compareSync } from 'bcrypt';

const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const { userName, email, password } = req.body;
        User.findOne({ userName, email }, (err, user) => {
            if (user && compareSync(password, user.password)) {
                res.send({ message: 'Login Success', user });
            }
            else {
                res.send({ message: `Details not found` });
            }
        });
    });

export { router };
