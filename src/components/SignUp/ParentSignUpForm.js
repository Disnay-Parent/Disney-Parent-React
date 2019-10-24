import React, {useState} from 'react';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

function ParentSignUpForm(props) {



  const [credentials, setCredentials] = useState({});

    
     const parentSignUp = e => {
        e.preventDefault();
        axiosWithAuth().post('/auth/register', credentials)
                .then(res => {
                    console.log(res.data)

                    localStorage.setItem('token', res.data.token);
                    props.history.push('/');
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
      <h1>Parent Sign Up Form</h1>
      <form onSubmit={parentSignUp}>
        <div>
        <label>Account Type:</label>
        <input 
              name="type"
              type="text"
              placeholder="parent"
              value="parent"
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
          <label>Emergency Phone Number:</label>
          {/* {touched.emergencyPhone && errors.emergencyPhone && <p>{errors.emergencyPhone}</p>} */}
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
    </div>
  );
}



export default ParentSignUpForm;