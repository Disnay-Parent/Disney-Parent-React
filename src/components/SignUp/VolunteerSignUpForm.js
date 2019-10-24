import React, {useState} from 'react';
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

function VolunteerSignUpForm(props) {

  const [credentials, setCredentials] = useState({});

    
  const volunteerSignUp = e => {
     e.preventDefault();
     axiosWithAuth().post('/auth/register', {...credentials, type: "volunteer"})
             .then(res => {
                 console.log(res.data)

                 localStorage.setItem('token', res.data.token);
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
    <div>
      <h1>Volunteer Sign Up Form</h1>
      <form onSubmit={volunteerSignUp}>
    
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
          <label>Average Cost Per Child:</label>
            <input 
              name="avgPerChild"
              type="number"
              placeholder="amount"
              value={"0" || credentials.avgPerChild}
              onChange={signUpChangeHandler}
            />
          </div>
          <div>
            <label>Are you willing to negotiate the cost of service?</label>
            <input 
              name="negotiable"
              type="radio"
              placeholder="amount"
              value={true}
            />
            Yes
            <input
              name="negotiable"
              type="radio"
              placeholder="amount"
              value={false}
            />
            No
          </div>
          <div>
            <label>CPR Certified</label>
            <input  
              name="cprCertified"
              type="radio"
              value=""
            />
            Yes
            <input
              name="cprCertified"
              type="radio"
              value="no"
            />
            No
          </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}


export default VolunteerSignUpForm;