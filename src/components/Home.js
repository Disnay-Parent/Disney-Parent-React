import React from 'react';
import {Route, Link} from 'react-router-dom';
import ParentSignUp from './SignUp/ParentSignUpForm';
import VolunteerFormikSignUp from './SignUp/VolunteerSignUpForm';
import Login from "./Login/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";


const  Home = () => {
  return (
    <div>
      {/* Select either Parent and Volunteer to Route to 
          appropriate component. */}
      <h1>Are you a Parent or Volunteer?</h1>

      <Link to="/parent-signup-form">
        <h3>Parent</h3>
      </Link> 
      <Link to="/volunteer-signup-form">
        <h3>Volunteer</h3>
      </Link>
      <Link to="/login">
        <h3>Login</h3>
      </Link>
      {/* <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link> */}
      
       {/* Need to add functionality to show either the sign up forms or the 
      login functionality, but not show the initial "are you a parent or volunteer once a user 
      clicks on either link, and need to add privateRoutes (react2)" */}
      

      
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}

    </div>
  );
}

export default Home;