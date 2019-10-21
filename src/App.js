import React from 'react';
import './App.css';
import Home from './components/Home';

import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateProvider reducer={reducer}>
          <Home />
        </StateProvider>
      </header>
    </div>
  );
}

export default App;
