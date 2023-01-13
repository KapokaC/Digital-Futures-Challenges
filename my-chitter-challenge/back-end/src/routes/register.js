import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
import User from '../models/userSchema.js'

const router = express.Router();

const register = (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            const err = new Error(`Validation failed`);
            err.statusCode = 422;
            err.data = error.array();
            throw err;
        }
    }
    catch (err) {
        return res.status(err.statusCode ?? 500).send({
            message: "Registration Failed", error: err.data
        });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12)
    });

    user.save(err => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        user.save(err => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.status(201).send({ message: `User was registered successfully`, user });
        });
    });
};

router.route("/").post(
    [
        body("password").exists().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/).escape(),
        body("email").exists().trim().escape().normalizeEmail().isEmail(),
        body("name.firstName").exists().trim().escape(),
        body("name.lastName").exists().trim().escape(),
        body("name.userName").exists().trim().escape(),
        body("email").custom(email => {
            return User.find({ email: email }).then(user => {
                if (user.length) {
                    return Promise.reject('E-mail already in use');
                };
            });
        })
    ],
    register);

export { router };