const express = require('express');
const Status = require('../models/Status');
const router = express.Router();

// Get all statuses
router.get('/', async (req, res) => {
    const statuses = await Status.find().sort({ order: 1 });
    res.json(statuses);
});

// Create a new status
router.post('/', async (req, res) => {
    const status = new Status(req.body);
    await status.save();
    res.json(status);
});

module.exports = router;