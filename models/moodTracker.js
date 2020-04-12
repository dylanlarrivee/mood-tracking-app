const mongoose = require('mongoose');

// Mongoose schema
const Schema = mongoose.Schema;
const MoodTrackerSchema = new Schema({
    wakeUpTime: String,
    sleepTime: String,
    energyLevel: Number,
    moodRanking: Number,
    cupCoffeeNum: Number,
    cupTeaNum: Number,
    minExercise: Number,
    weather: String,
    extraNotes: String,
    date: {
        type: String,
        default: Date.now()
    }
});

// Mongoose Model
const MoodTracker = mongoose.model('daily-tracker-inputs', MoodTrackerSchema);

// Saving data to our mongo database
const data = {
    wakeUpTime: '7:00 am',
    extraNotes: 'Test notes'
};

// const newMoodTracker = new MoodTracker(data); // instance of the model

// newMoodTracker.save((error) => {
//     if(error) {
//         console.log('oops something happened');
//     } else {
//         console.log('data has been saved');
//     }
// });

// .save()

module.exports = MoodTracker;