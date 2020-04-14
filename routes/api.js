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
    const data = req.body;

    const newMoodTracker = new MoodTracker(data); // instance of the model

    newMoodTracker.save((error) => {
        if(error) {
            console.log('oops something happened');
            res.status(500).json({ msg: 'Sorry, internal serer errors'});
        } else {
            console.log('data has been saved');
            msg: 'Your data has been saved'
        }
    });
    // newMoodTracker.save((error) => {
    //     if(error) {
    //         res.status(500).json({ msg: 'Sorry, internal serer errors'});
    //     } else {
    //         res.json({
    //             msg: 'Your data has been saved'
    //         });
    //     }
    // });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'Dylan',
        age: 34
    };
    res.json(data);
});

module.exports = router;