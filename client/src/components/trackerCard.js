import React, { useState , useReducer} from 'react';
import axios from 'axios'
import '../css/trackerCard.css';

  
const dropDownCounter = (props) => {

}

const MoodTrackerCard = (props) => {
    const [userInput, setUserInput] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
      date: '',
      wakeUpTime: '',
      sleepTime: '',
      energyLevel: '',
      moodRanking: '',
      cupCoffeeNum: '',
      cupTeaNum: '',
      minExercise: '',
      weather: '',
      extraNotes: ''
      }
    );
    const handleChange = evt => {
      const name = evt.target.name;
      const newValue = evt.target.value;
      setUserInput({[name]: newValue});
    }

    const submitChange = (event) => {
        console.log(userInput);
        event.preventDefault();

      const payload = {
          extraNotes : userInput.extraNotes
          };

      axios({
        url: '/api/save',
        method: 'POST',
        data: payload
      })
      .then(() => {
        console.log('data has been sent to the server')
      })
      .catch(() => {
        console.log('Internal server error')
      });    
    };



    return (
      <div id="thumbnail" className="trackerCard" style={{ color: ' #111'}}>
      <h2>How did you feel today?</h2>
            <br/>
      <div>
        <form onSubmit={submitChange}>
        <label htmlFor="date">Date: </label><br/>
        <input type="date" id="date" name="date" value={userInput.date} onChange={handleChange}/><br/>
        <label htmlFor="wake-up-time">Wake up time: </label><br/>
        <input type="time" id="wakeUpTime" name="wakeUpTime" value={userInput.wakeUpTime} onChange={handleChange}/><br/>
        <label htmlFor="wake-up-time">Sleep time: </label><br/>
        <input type="time" id="wake-up-time" name="sleepTime" value={userInput.sleepTime} onChange={handleChange}/><br/>
        <label htmlFor="energy-level">Energy Level (1 = Low 10 = High): </label><br/>
        <label className="radio-inline" />
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "1"} value="1" onChange={handleChange} />1
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "2"} value="2" onChange={handleChange} />2
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "3"} value="3" onChange={handleChange} />3
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "4"} value="4" onChange={handleChange} />4
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "5"} value="5" onChange={handleChange} />5
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "6"} value="6" onChange={handleChange} />6
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "7"} value="7" onChange={handleChange} />7
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "8"} value="8" onChange={handleChange} />8
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "9"} value="9" onChange={handleChange} />9
        <input type="radio" name="energyLevel" checked={userInput.energyLevel === "10"} value="10" onChange={handleChange} />10
        <br/> <br/>
        <label htmlFor="mood-ranking">Mood Ranking (1 = Bad 10 = Great): </label><br/>
        <label className="radio-inline" />
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "1"} value="1" onChange={handleChange} />1
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "2"} value="1" onChange={handleChange} />2
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "3"} value="1" onChange={handleChange} />3
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "4"} value="1" onChange={handleChange} />4
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "5"} value="1" onChange={handleChange} />5
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "6"} value="1" onChange={handleChange} />6
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "7"} value="1" onChange={handleChange} />7
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "8"} value="1" onChange={handleChange} />8
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "9"} value="1" onChange={handleChange} />9
        <input type="radio" name="moodRanking"  checked={userInput.moodRanking === "10"} value="1" onChange={handleChange} />10
        <br/> <br/>
        <label htmlFor="cupCoffeeNum" >Number of cups of coffee: </label><br/>
        <select id="cupCoffeeNum" name="cupCoffeeNum" value={userInput.cupCoffeeNum} onChange={handleChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10+">10+</option>
        </select><br/>
        <label htmlFor="cupTeaNum" >Number of cups of tea: </label><br/>
        <select id="cupTeaNum" name="cupTeaNum" value={userInput.cupTeaNum} onChange={handleChange}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10+">10+</option>
        </select><br/>
        <label htmlFor="cupTeaNum" >Minutes of exercise: </label><br/>
        <select id="cupTeaNum" name="cupTeaNum" value={userInput.cupTeaNum} onChange={handleChange}>
        <option value="0">0</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100+">100+</option>
        </select><br/>
        <label htmlFor="weather">Weather today: </label><br/>
        <input type="text" id="weather" name="weather" value={userInput.weather} onChange={handleChange}/><br/>
        <label htmlFor="extraNotes">Extra notes: </label><br/>
        <input type="text" id="extraNotes" name="extraNotes" value={userInput.extraNotes} onChange={handleChange}/><br/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
    )  
  }

  export default MoodTrackerCard;