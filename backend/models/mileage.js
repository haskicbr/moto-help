const mongoose = require('mongoose');
const modelName = 'mileage';

const donationSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model(modelName, donationSchema);