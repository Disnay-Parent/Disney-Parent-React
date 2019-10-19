import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {withFormik, Form, Field} from 'formik';

function ParentSignUpForm(props) {

  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   name: "",
  //   lastName: "",
  //   age: "",
  //   phoneNum: "",
  //   emergencyNum: ""
  // });

  // const handleChange = evt => {
  //   setForm({
  //     ...form,
  //     [evt.target.name]: evt.target.value
  //   });
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   axiosWithAuth()
  //     .post('/parent')
  //     .then(res => {
  //       console.log(res);
  //       setForm({
  //         username: res.data.username,
  //         email: res.data.email,
  //         password: res.data.password,
  //         name: res.data.name,
  //         lastName: res.data.lastName,
  //         age: res.data.age,
  //         phoneNum: res.data.phoneNum,
  //         emergencyNum: res.data.emergencyNum
  //       });
  //     })
  //     .catch(err => console.log(err));
  //   console.log(form);
  // };

  return (
    <div>
      <h1>Parent Sign Up Form</h1>
      {/* <Form onSubmit={handleSubmit}> */}
      <Form>
        <label>Username:</label>
          <Field 
            name="username"
            type="text"
            placeholder="username"
            // value={form.username}
            // onChange={handleChange}
          />
        <label>Email:</label>
          <Field 
            name="email"
            type="email"
            placeholder="email"
            // value={form.email}
            // onChange={handleChange}
          />
        <label>Password:</label>
          <Field  
            name="password"
            type="password"
            placeholder="password"
            // value={form.password}
            // onChange={handleChange}
          />
        <label>First Name:</label>
          <Field 
            name="name"
            type="text"
            placeholder="First Name"
            // value={form.name}
            // onChange={handleChange}
          />
        <label>Last Name:</label>
          <Field 
            name="lastName"
            type="text"
            placeholder="Last Name"
            // value={form.lastName}
            // onChange={handleChange}
          />
        <label>Age:</label>
          <Field 
            name="age"
            type="text"
            placeholder="age"
            // value={form.age}
            // onChange={handleChange}
          />
        <label>Phone Number:</label>
          <Field 
            name="phoneNum"
            type="text"
            placeholder="phone number"
            // value={form.phoneNum}
            // onChange={handleChange}
          />
        <label>Emergency Phone Number:</label>
          <Field 
            name="emergencyNum"
            type="text"
            placeholder="Emergency phone number"
            // value={form.emergencyNum}
            // onChange={handleChange}
          />
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}

const ParentFormikSignUp = withFormik({
  mapPropsToValues({username, email, password, name, lastName, age, phoneNum, emergencyNum}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      name: name || "",
      lastName: lastName || "",
      age: age || "",
      phoneNum: phoneNum || "",
      emergencyNum: emergencyNum || ""
    };
  },

  handleSubmit(evt) {
    // evt.preventDefault();
    axiosWithAuth()
      .post('/parent')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }
})(ParentSignUpForm);

export default ParentFormikSignUp;