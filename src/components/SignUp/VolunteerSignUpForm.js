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

// const VolunteerFormikSignUp = withFormik({
//   mapPropsToValues({username, email, password, name, 
//                     lastName, DOB, phoneNum, avgPerChild,
//                     negotiable, cprCertified}) {
//     return {
//       username: username || "",
//       email: email || "",
//       password: password || "",
//       name: name || "",
//       lastName: lastName || "",
//       DOB: DOB || "",
//       phoneNum: phoneNum || "",
//       avgPerChild: avgPerChild || "",
//       negotiable: negotiable || "No",
//       cprCertified: cprCertified || "No"
//     };
//   },

//   // Validation Schema
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//       .min(6, "Username must have at least 6 characters")
//       .required("Username is required"),
//     email: Yup.string()
//       .email("Email is not valid")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must have at least 6 characters")
//       .required("Password is reuired"),
//     name: Yup.string()
//       .min(3, "First name must have at least 3 characters")
//       .required("First name is required"),
//     lastName: Yup.string()
//       .min(3, "Last name must have at least 3 characters")
//       .required("Last name is required"),
//     age: Yup.number()
//       .positive("Age must be a positive number")
//       .integer("Age must be a whole number")
//       .min(18, "Must be 18 or older")
//       .required("Age is required"),
//     phoneNum: Yup.number()
//       .min(10, "Phone number must be 10 digits long")
//       .positive("Phone number must be a positive number")
//       .required("Phone number is reuqired"),
//     avgPerChild: Yup.number()
//       .positive("Average price must be a positive number")
//       .required("Average price is reuqired"),
//     negotiable: Yup.string()
//       .required("Must select 'Yes' or 'No'"),
//     cprCertified: Yup.string()
//       .required("Must select 'Yes' or 'No'"),
//   }),
  // End Validation Schema

  // handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
  //   if (values.email === "tiffanyfeldkamp@gmail.com") {
  //     setErrors({email: "That email is already taken"});
  //   } else {
  //     axiosWithAuth()
  //       .post('/auth/register', values)
  //       .then(res => {
  //         console.log(res);
  //         resetForm();
  //         setSubmitting(true);
  //       })
  //       .catch(err => console.log(err));
  //       setSubmitting(false);
  //   }
  // }

// })(VolunteerSignUpForm);

export default VolunteerSignUpForm;