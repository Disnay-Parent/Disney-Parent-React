import React from 'react';
// import {Route} from 'react-router-dom';
import './App.css';
import ParentOrVolunteer from './components/ParentOrVolunteer';
// import ParentSignUpForm from './components/ParentSignUpForm';
// import VolunteerSignUpForm from './components/VolunteerSignUpForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentOrVolunteer />
        {/* <Route path="/parent-signup-form" component={ParentSignUpForm} /> */}
        {/* <Route path="/volunteer-signup-form" component={VolunteerSignUpForm} /> */}
      </header>
    </div>
  );
}

export default App;
