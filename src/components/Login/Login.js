import React, {useState} from 'react'
import {connect} from "react-redux"
import {userLogin} from "../../actions/index"
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {withRouter} from "react-router-dom";

function Login(props) {

  console.log("Login Props:", props)

  //should be able to uncomment and should work once we have the api to put in the axios post method

  // const [credentials, setCredentials] = useState({});

  const [object, setObject] = useState({
    username: "",
    password: ""
  });

  const handleChanges = (e) => {
    setObject({...object, [e.target.name]: e.target.value})
  }

  
  const login = (e) => {
    e.preventDefault()
       axiosWithAuth()
         .post("/auth/login", object)
         .then(res => {
           console.log(res);
           
           localStorage.setItem("token", res.data.token);
           props.history.push("/dashboard");
         })
         .catch(err => console.log(err));
  };

// const loginChangeHandler = event => {

//     setCredentials({
//         ...credentials,
//          [event.target.name]: event.target.value 
//         });
// }
  return (
    <div>
      <form onSubmit={login}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            type="text"
            placeholder="username"
            value={object.username}
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            value={object.password}
            onChange={handleChanges}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

// const dash = props => {
//   props.history.push("/dashboard");
// }

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
  // End Validation Schema




export default withRouter(Login);