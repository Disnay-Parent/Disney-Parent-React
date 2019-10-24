import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

function ParentSignUpForm({errors, touched}, props) {

 

  // const [credentials, setCredentials] = useState({});

    
  //    const parentSignUp = e => {
  //       e.preventDefault();
  //       axiosWithAuth().post('/auth/register', credentials)
  //               .then(res => {
  //                   console.log(res.data)

  //                   localStorage.setItem('token', res.data.token);
  //                   props.history.push('/');
  //               })
  //               .catch(err => console.log(err));
  //   }

  //   const signUpChangeHandler = event => {

  //       setCredentials({
  //           ...credentials,
  //            [event.target.name]: event.target.value 
  //           });
  //   }


  return (
    <div>
      <h1>Parent Sign Up Form</h1>
      <Form>
        
        <div>
          <label>Username:</label>
          {touched.username && errors.username && <p>{errors.username}</p>}
            <Field 
              name="username"
              type="text"
              placeholder="username"
            />
        </div>
        <div>
          <label>Password:</label>
          {touched.password && errors.password && <p>{errors.password}</p>}
            <Field  
              name="password"
              type="password"
              placeholder="password"
            />
        </div>
        <div>
          <label>First Name:</label>
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            <Field 
              name="firstName"
              type="text"
              placeholder="First Name"
            />
        </div>
        <div>
          <label>Last Name:</label>
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            <Field 
              name="lastName"
              type="text"
              placeholder="Last Name"
             />
        </div>
        <div>
          <label>Email:</label>
          {touched.email && errors.email && <p>{errors.email}</p>}
            <Field 
              name="email"
              type="email"
              placeholder="email"
          
            />
        </div>
        
        <div>
          <label>Date of Birth:</label>
          {touched.DOB && errors.DOB && <p>{errors.DOB}</p>}
            <Field 
              name="DOB"
              type="date"
              placeholder="dob"

            />
        </div>
        <div>
          <label>Phone Number:</label>
          {touched.phoneNum && errors.phoneNum && <p>{errors.phoneNum}</p>}
            <Field 
              name="phoneNum"
              type="text"
              placeholder="phone number"
            />
        </div> 
        <div>
          <label>Emergency Phone Number:</label>
          {touched.emergencyPhone && errors.emergencyPhone && <p>{errors.emergencyPhone}</p>}
            <Field 
              name="emergencyPhone"
              type="text"
              placeholder="Emergency phone number"
            />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </Form>
    </div>
  );
}

const login = props => {
  props.history.push("/login");
}
const ParentFormikSignUp = withFormik({
  mapPropsToValues({username, email, password, firstName,
                     lastName, DOB, phoneNum, emergencyPhone}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      DOB: DOB || "",
      phoneNum: phoneNum || "",
      emergencyPhone: emergencyPhone || "",
    };
  },

  // Validation Schema
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must have at least 6 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is required"),
    firstName: Yup.string()
      .min(3, "First name must have at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must have at least 3 characters")
      .required("Last name is required"),
    DOB: Yup.date()
      .required("DOB is required"),
    phoneNum: Yup.number()
      .min(10, "Phone number must be 10 digits long")
      .positive("Phone number must be a positive number")
      .required("Phone number is reuqired"),
    emergencyNum: Yup.number()
      .min(10, "Phone number must be 10 digits long")
      .positive("Phone number must be a positive number")
      .required("Phone number is required"),
  
  }),
  // End Validation Schema

  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
  if (values.email === "tiffanyfeldkamp@gmail.com") {
    setErrors({email: "That email is already taken"});
  } else {
    console.log({ ...values, type: "parent" });
    axiosWithAuth()
      .post("/auth/register", { ...values, type: "parent" })
      .then(res => {
        console.log(res);
        setSubmitting(true);
        localStorage.setItem("token", res.data.token);
        login();
      })
      .catch(err => console.log(err));
      setSubmitting(false);
  }
}

})(ParentSignUpForm);

export default ParentFormikSignUp;