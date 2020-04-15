import React, { useState , useReducer} from 'react';
import axios from 'axios'
import '../css/trackerCard.css';



const pastTrackerEntries = (props) => {
getTrackerData = () => {
    axios.get('/api')
      .then(() => {
        console.log('Data has been recevied');   
      })
      .catch(() => {
        console.log('Error retrieving the data')
      })
  }
}