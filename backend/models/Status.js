const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    name: String,
    color: String,
    order: Number,
});

module.exports = mongoose.model('Status', StatusSchema);