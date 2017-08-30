const mongoose = require('mongoose');

const jokesSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: true
    }
});

const jokesModel = mongoose.model('joke', jokesSchema);

module.exports = jokesModel;