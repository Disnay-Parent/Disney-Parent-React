import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
// import {axiosWithAuth} from '../utils/axiosWithAuth';

const Login = (props) => {

  //should be able to uncomment and should work once we have the api to put in the axios post method

  // const [credentials, setCredentials] = useState({});

  // useEffect(() => {
  //   const login = e => {
  //     e.preventDefault();
  //     axiosWithAuth.post("")
  //       .then(res => {
  //         console.log(res.data.token)
  //         localStorage.setItem("token", res.data.token);
  //         this.props.history.push("/")
  //       })
  //       .catch(err => console.log("Login Page Erroring", err))
  //   }
  // }, [])

  // const loginChangeHandler = (e) => {
  //   // Need React II's help here
  //   setCredentials({
  //     ...credentials,
  //     [e.target.name]: e.target.value
  //   })
  // }

  //add onChange value of  onChange={loginChangeHandler} to each input value to make form work
  //also add {this.login} to the onSumbit on the form

  return (
    <div>
      <Form onSumbit="">
        <div>
          Are you a Parent or Volunteer?
          <label>Parent</label>
          <Field 
            name="parentOrVolunteer"
            type="radio"
            value="parent"

          
          />
          <label>Volunteer</label>
          <Field
            name="parentOrVolunteer"
            type="radio"
            value="volunteer"
            />
        </div>
        <div>
          <label>Username:</label>
          <Field 
            name="username"
            type="text"
            placeholder="username"
            />
        </div>
        <div>
          <label>Password:</label>
          <Field
            name="password"
            type="password"
            placeholder="password"
            />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </Form>
    </div>
  );
}

const LoginFormikForm = withFormik({
  mapPropsToValues({parentOrVolunteer, username, password}) {
    return {
      parentOrVolunteer: parentOrVolunteer || "",
      username: username || "",
      password: password || ""
    };
  },

  // Validation Schema
  validationSchema: Yup.object().shape({
    parentOrVolunteer: Yup.string()
      .required("Must select either Parent or Volunteer"),
    username: Yup.string()
      .min(6, "Username must have at least 6 characters")
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is reuired"),
  }),
  // End Validation Schema

 
  
})(Login)

export default LoginFormikForm;