const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', TaskSchema);