import React, {useState} from 'react';
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

function VolunteerSignUpForm(props) {

  const [credentials, setCredentials] = useState({});

    
  const volunteerSignUp = e => {
     e.preventDefault();
     axiosWithAuth().post('/auth/register', credentials)
             .then(res => {
                 console.log(res.data)

                 localStorage.setItem('token', res.data.token);
                 props.history.location.push('/');
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
      <label>Account Type:</label>
        <input 
              name="type"
              type="string"
              placeholder="volunteer"
              value={credentials.type}
              onChange={signUpChangeHandler}
            />
        </div>
        <div>
          <label>Username:</label>
          {/* {touched.username && errors.username && <p>{errors.username}</p>} */}
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
          {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
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
          {/* {touched.firstName && errors.firstName && <p>{errors.firstName}</p>} */}
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
          {/* {touched.lastName && errors.lastName && <p>{errors.lastName}</p>} */}
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
          {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
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
          {/* {touched.DOB && errors.DOB && <p>{errors.DOB}</p>} */}
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
          {/* {touched.phoneNum && errors.phoneNum && <p>{errors.phoneNum}</p>} */}
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
          {/* {touched.avgPerChild && errors.avgPerChild && <p>{errors.avgPerChild}</p>} */}
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
            {/* {touched.negotiable && errors.negotiable && <p>{errors.negotiable}</p>} */}
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
            {/* {touched.cprCertified && errors.cprCertified && <p>{errors.cprCertified}</p>} */}
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