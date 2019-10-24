import React, {useState} from 'react'
import {connect} from "react-redux"
import {userLogin} from "../../actions/index"
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const Login = (props) => {

  //should be able to uncomment and should work once we have the api to put in the axios post method

  const [credentials, setCredentials] = useState({});

  
  const login = async (e) => {
    e.preventDefault();
    console.log(credentials)
    await props.userLogin(credentials)
    
  };

const loginChangeHandler = event => {

    setCredentials({
        ...credentials,
         [event.target.name]: event.target.value 
        });
}
  return (
    <div>
      <form onSubmit={login}>
        <div>
          <label>Username:</label>
          <input 
            name="username"
            type="text"
            placeholder="username"
            onChange={loginChangeHandler}
            />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={loginChangeHandler}
            />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

// const LoginFormikForm = withFormik({
//   mapPropsToValues({username, password}) {
//     return {
     
//       username: username || "",
//       password: password || ""
//     };
//   },

//   // Validation Schema
//   validationSchema: Yup.object().shape({
//     parentOrVolunteer: Yup.string()
//       .required("Must select either Parent or Volunteer"),
//     username: Yup.string()
//       .min(6, "Username must have at least 6 characters")
//       .required("Username is required"),
//     password: Yup.string()
//       .min(6, "Password must have at least 6 characters")
//       .required("Password is reuired"),
//   }),
//   // End Validation Schema

 
  
// })(Login)
const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, {userLogin})(Login);