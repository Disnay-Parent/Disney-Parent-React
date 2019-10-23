import React, {useState} from 'react'
// import {withFormik, Form, Field} from 'formik';
// import * as Yup from 'yup';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

const Login = (props) => {

  //should be able to uncomment and should work once we have the api to put in the axios post method

  const [credentials, setCredentials] = useState({});

  
  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/auth/login', credentials)
            .then(res => {
                console.log(res.data)

                localStorage.setItem('token', res.data.token);
                props.history.location.push('/');
            })
            .catch(err => console.log(err));
}

const loginChangeHandler = event => {

    setCredentials({
        ...credentials,
         [event.target.name]: event.target.value 
        });
}
  
  console.log(credentials)
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

export default Login;