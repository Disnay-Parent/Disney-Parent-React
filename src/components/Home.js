import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MainComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ParentAndVolunteer = styled.div`
    margin-bottom: 50px;
    margin-top: 20px;
`;

const  Home = () => {
  return (
    <MainComponent>
      <ParentAndVolunteer>
          <h1>Are you a Parent or Volunteer?</h1>

          <Link to="/parent-signup-form">
            <h3>Parent</h3>
          </Link> 
          <Link to="/volunteer-signup-form">
            <h3>Volunteer</h3>
          </Link>
      </ParentAndVolunteer>
      <h2>Already have an Account?</h2>
      <Link to="/login">
        <h3>Login</h3>
      </Link>
    </MainComponent>
  );
}

export default Home;