import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute"
import PublicRoute from "./utils/PublicRoute"
import Dashboard from "./components/Dashboard/Dashboard"
import ParentSignUpForm from "./components/SignUp/ParentSignUpForm";
import VolunteerSignUpForm from "./components/SignUp/VolunteerSignUpForm";
import Login from "./components/Login/Login";
import EditParent from "./components/Parent/EditParent"
import EditVolunteer from "./components/Volunteer/EditVolunteer"
import EditChild from "./components/Child/EditChild";
// import { StateProvider } from "./state/state";
import { reducer } from "./reducers/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import Messages from "./Messages/Messages";


// import Volunteer from "./components/Volunteer/Volunteer";
// import Parent from "./components/Parent/Parent";
// import { volunteer, parent } from './components/DataTest';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <header>
        <Provider store={store}>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute path="/parent-signup-form" component={ParentSignUpForm} />
          <PublicRoute path="/volunteer-signup-form" component={VolunteerSignUpForm}/>
          <PublicRoute path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/parent-edit" component={EditParent} />
          <PrivateRoute path="/child-edit" component={EditChild} />
          <PrivateRoute path="/volunteer-edit" component={EditVolunteer} />
          <PrivateRoute path="/messages/" component={Messages} />
        </Provider>
      </header>
    </div>
  );
}


export default App;
