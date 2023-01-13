import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        userName: { type: String, required: true }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },

    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model(`User`, userSchema);

export default User;
