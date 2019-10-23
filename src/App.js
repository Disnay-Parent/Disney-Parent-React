import React from 'react';
import './App.css';
import Home from './components/Home';

import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";

import Volunteer from "./components/Volunteer/Volunteer";
import Parent from "./components/Parent/Parent";
import VolunteerCard from './components/Volunteer/VolunteerCard';
import { volunteer, parent } from './components/DataTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateProvider reducer={reducer}>
          <Home />
        </StateProvider>
        {/* <Parent user={parent} />*/}
        <Volunteer user={volunteer} />
      </header>
    </div>
  );
}

//update to revert from chatkit

export default App;
