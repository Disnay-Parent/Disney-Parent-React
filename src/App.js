import React from 'react';
import './App.css';
import Home from './components/Home';

// import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"

import Volunteer from "./components/Volunteer/Volunteer";
import Parent from "./components/Parent/Parent";
import { volunteer, parent } from './components/DataTest';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <header>
        <Provider store={store}>
          <Home /> 
        </Provider>
        {/* <Parent user={parent} /> */}
        {/* <Volunteer user={volunteer} /> */}
      </header>
    </div>
  );
}


export default App;
