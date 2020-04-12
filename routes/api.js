const express = require('express');

const router = express.Router();

const MoodTracker = require('../models/moodTracker')

// Routes
router.get('/', (req, res) => {
    MoodTracker.find({})
        .then((data) => {
            console.log('Data', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('Error', error);
        });
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);
    res.json({
        msg: 'We received your data'
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'Dylan',
        age: 34
    };
    res.json(data);
});

module.exports = router;