const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const taskRoutes = require('./routes/tasks');
const statusRoutes = require('./routes/status');

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/tasks', taskRoutes);
app.use('/api/statuses', statusRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));