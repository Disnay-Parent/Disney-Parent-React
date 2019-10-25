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
    margin-bottom: 30px;
`;

const DisneyFont = styled.h1`
    font-family: 'WaltographRegular';
`;

const MainTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 2000px;
`;

const MainTitle2 = styled.h2`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 2000px;
`;

const  Home = () => {
  return (
    <MainComponent>
      <ParentAndVolunteer>
          <MainTitle>Are you a Parent or Volunteer?</MainTitle>

          <Link to="/parent-signup-form">
            <DisneyFont>Parent</DisneyFont>
          </Link> 
          <Link to="/volunteer-signup-form">
            <DisneyFont>Volunteer</DisneyFont>
          </Link>
      </ParentAndVolunteer>
      <MainTitle2>Already have an Account?</MainTitle2>
      <Link to="/login">
        <DisneyFont>Login</DisneyFont>
      </Link>
    </MainComponent>
  );
}

export default Home;