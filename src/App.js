import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard"
import ParentSignUpForm from "./components/SignUp/ParentSignUpForm";
import VolunteerSignUpForm from "./components/SignUp/VolunteerSignUpForm";
import Login from "./components/Login/Login";
// import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"


// import Volunteer from "./components/Volunteer/Volunteer";
// import Parent from "./components/Parent/Parent";
// import { volunteer, parent } from './components/DataTest';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <header>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route path="/parent-signup-form" component={ParentSignUpForm} />
          <Route
            path="/volunteer-signup-form"
            component={VolunteerSignUpForm}
          />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Provider>
        {/* <Parent user={parent} /> */}
        {/* <Volunteer user={volunteer} /> */}
      </header>
    </div>
  );
}


export default App;
