import React from 'react';
import {Link} from 'react-router-dom';

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
    </div>
  );
}

export default Home;