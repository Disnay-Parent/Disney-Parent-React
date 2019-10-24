import React, {useState} from 'react'
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



export default withRouter(Login);