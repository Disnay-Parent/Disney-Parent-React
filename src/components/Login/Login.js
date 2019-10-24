import React from 'react'
import {connect} from "react-redux"
import {userLogin} from "../../actions/index"
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

function Login({errors, touched}, props) {

  //should be able to uncomment and should work once we have the api to put in the axios post method

  // const [credentials, setCredentials] = useState({});

  
//   const login = (e) => {
//     e.preventDefault();
//     console.log(credentials)
//     props.userLogin(credentials)
//     props.history.push("/dashboard");
//   };

// const loginChangeHandler = event => {

//     setCredentials({
//         ...credentials,
//          [event.target.name]: event.target.value 
//         });
// }
  return (
    <div>
      <Form>
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

const dash = props => {
  props.history.push("/dashboard");
}

const LoginFormikForm = withFormik({
  mapPropsToValues({username, password}) {
    return {
     
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

  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    if (values.email === "tiffanyfeldkamp@gmail.com") {
      setErrors({email: "That email is already taken"});
    } else {
      console.log({ ...values});
      axiosWithAuth()
        .post("/auth/login")
        .then(res => {
          console.log(res);
          setSubmitting(true);
          localStorage.setItem("token", res.data.token);
          dash();
        })
        .catch(err => console.log(err));
        setSubmitting(false);
    }
  }
  
})(Login)
const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {userLogin})(LoginFormikForm);