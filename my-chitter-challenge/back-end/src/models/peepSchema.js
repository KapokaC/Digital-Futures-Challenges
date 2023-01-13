import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now,
        required: true
    },
    peepBody: {
        type: String,
        required: true
    }
});

const Peep = new mongoose.model(`Peep`, peepSchema);

export default Peep;