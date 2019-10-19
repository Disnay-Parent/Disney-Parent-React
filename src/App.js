import React from 'react';
import './App.css';
import ParentOrVolunteer from './components/ParentOrVolunteer';

import { StateProvider } from "./state/state"
import { reducer } from "./state/reducers"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateProvider reducer={reducer}>
          <ParentOrVolunteer />
        </StateProvider>
      </header>
    </div>
  );
}

export default App;
