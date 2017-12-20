const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
    pickup: {
        type: String,
        required: true
    }
});

const pickupModel = mongoose.model('pickup', pickupSchema);

module.exports = pickupModel;