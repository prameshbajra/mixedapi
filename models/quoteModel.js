const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    }
});

const quotesModel = mongoose.model('quote', quotesSchema);

module.exports = quotesModel;