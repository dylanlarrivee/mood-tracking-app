import React, { useState , useReducer} from 'react';
import './css/App.css';
import MoodTrackerCard from './components/trackerCard';
import TopNav from './components/topNav';



const App = (props) => {
  return (
    <div>
     <TopNav />
    
    <div style={{padding: '0 16px'}}>
      <h2>Track your daily mood</h2>
      <p>Use this app to track your mood and energy levels on a daily basis and then see how that looks over time.</p>
      <h4>Fill out each night before bed</h4>
    </div>
    <MoodTrackerCard />
    </div>
  );
}

export default App;
