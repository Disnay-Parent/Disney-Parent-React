import React from 'react'
import {useFormik, Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
// import {axiosWithAuth} from '../utils/axiosWithAuth';

function Login() {
  return (
    <div>
      <Form>
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

  handleSubmit() {
      // Need React II's help here
    },
  
})(Login)

export default LoginFormikForm;