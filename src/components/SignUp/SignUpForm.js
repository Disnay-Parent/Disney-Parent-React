import React from "react";

const SignUpForm = (props) => {

    const signupChangeHandler = () => {
        

    }


  return (
    <form onSubmit="">
        <input 
            type="text"
            name="firstName"
            value={}
            onChange={signupChangeHandler}
            placeholder="First Name"/>

        <input 
            type="text"
            name="lastName"
            value={}
            onChange={signupChangeHandler}
            placeholder="Last Name"/>    
        <input 
            type="email"
            name="email"
            value={}
            onChange={signupChangeHandler}
            placeholder="Email Address"/>
        
        <input 
            type="text"
            name="userName"
            value={}
            onChange={signupChangeHandler}
            placeholder="User Name"/>

        <input 
            type="password"
            name="password"
            value={}
            onChange={signupChangeHandler}
            placeholder="Password"/>    


    </form>

    );
};

export default SignUpForm;