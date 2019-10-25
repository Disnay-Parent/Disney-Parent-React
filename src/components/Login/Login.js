import React, {useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth';
import {withRouter} from "react-router-dom";
import styled from 'styled-components';

const InputField = styled.div`
    padding: 10px;
`;

const LoginTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;

function Login(props) {

  //should be able to uncomment and should work once we have the api to put in the axios post method

  // const [credentials, setCredentials] = useState({});

  const [object, setObject] = useState({
    username: "",
    password: ""
  });
  console.log(object)
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
        <LoginTitle>Log In</LoginTitle>
        <InputField>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={object.username}
            onChange={handleChanges}
          />
        </InputField>
        <InputField>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={object.password}
            onChange={handleChanges}
          />
        </InputField>
        <InputField>
          <button type="submit">Login</button>
        </InputField>
      </form>
    </div>
  );
}



export default withRouter(Login);