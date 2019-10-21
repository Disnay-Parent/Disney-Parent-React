import React from 'react';
import './App.css';
import Home from './components/Home';

import { StateProvider } from "./state/state";
import { reducer, initialState } from "./reducers/reducers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateProvider initialState={initialState} reducer={reducer}>
          <Home />
        </StateProvider>
      </header>
    </div>
  );
}

export default App;
