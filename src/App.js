import React from 'react';
import './App.css';
import Home from './components/Home';
import Nav from "./components/Navigation/Navigation";

import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <StateProvider reducer={reducer}>
          <Home />
        </StateProvider>
      </header>
    </div>
  );
}

//update to revert from chatkit

export default App;
