import React from 'react';
import {Route, Link} from 'react-router-dom';
import ParentSignUpForm from './ParentSignUpForm';
// import VolunteerSignUpForm from './VolunteerSignUpForm';

function ParentOrVolunteer() {
  return (
    <div>
      {/* Select either Parent and Volunteer to Route to 
          appropriate component. */}
      <h1>Are you a Parent or Volunteer?</h1>

      <Link to="/parent-signup-form">
        <h3>Parent</h3>
      </Link> 
      <Route path="/parent-signup-form" component={ParentSignUpForm} />

      <Link to="/volunteer-signup-form">
        <h3>Volunteer</h3>
      </Link>
    </div>
  );
}

export default ParentOrVolunteer;