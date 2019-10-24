import React, {useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const MainComponent = styled.div`
    margin-top: 20px;
`;

function ParentSignUpForm(props) {

  const [credentials, setCredentials] = useState({});
   
     const parentSignUp = e => {
        e.preventDefault();
        axiosWithAuth().post('/auth/register', {...credentials, type: "parent"})
                .then(res => {
                    console.log(res.data)

                    
                    props.history.push('/login');
                })
                .catch(err => console.log(err));
    }

    const signUpChangeHandler = event => {

        setCredentials({
            ...credentials,
             [event.target.name]: event.target.value 
            });
    }


  return (
    <MainComponent>
      <h1>Parent Sign Up Form</h1>
      <form onSubmit={parentSignUp}>
        <div>
          <label>Username:</label>
            <input 
              name="username"
              type="text"
              placeholder="username"
              value={credentials.username}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>Password:</label>
            <input  
              name="password"
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>First Name:</label>
            <input 
              name="firstName"
              type="text"
              placeholder="First Name"
              value={credentials.firstName}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>Last Name:</label>
            <input 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={credentials.lastName}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>Email:</label>
            <input 
              name="email"
              type="email"
              placeholder="email"
              value={credentials.email}
              onChange={signUpChangeHandler}
            />
        </div>
        
        <div>
          <label>Date of Birth:</label>
            <input 
              name="DOB"
              type="date"
              placeholder="dob"
              value={credentials.DOB}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>Phone Number:</label>
            <input 
              name="phoneNum"
              type="text"
              placeholder="phone number"
              value={credentials.phoneNum}
              onChange={signUpChangeHandler}
            />
        </div> 
        <div>
          <label>Emergency Phone Number:</label>
            <input 
              name="emergencyPhone"
              type="text"
              placeholder="Emergency phone number"
              value={credentials.emergencyPhone}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </MainComponent>
  );
}



export default withRouter(ParentSignUpForm);