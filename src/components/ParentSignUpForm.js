import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function ParentSignUpForm(props) {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    lastName: "",
    age: "",
    phoneNum: "",
    emergencyNum: ""
  });

  const handleChange = evt => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    axiosWithAuth()
      .post('/parent')
      .then(res => {
        console.log(res);
        setForm({
          username: res.data.username,
          email: res.data.email,
          password: res.data.password,
          name: res.data.name,
          lastName: res.data.lastName,
          age: res.data.age,
          phoneNum: res.data.phoneNum,
          emergencyNum: res.data.emergencyNum
        });
      })
      .catch(err => console.log(err));
    console.log(form);
  };

  return (
    <div>
      <h1>Parent Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
          <input 
            name="username"
            type="text"
            placeholder="username"
            value={form.username}
            onChange={handleChange}
          />
        <label>Email:</label>
          <input 
            name="email"
            type="text"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
          />
        <label>Password:</label>
          <input  
            name="password"
            type="text"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
          />
        <label>First Name:</label>
          <input 
            name="name"
            type="text"
            placeholder="First Name"
            value={form.name}
            onChange={handleChange}
          />
        <label>Last Name:</label>
          <input 
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
        <label>Age:</label>
          <input 
            name="age"
            type="text"
            placeholder="age"
            value={form.age}
            onChange={handleChange}
          />
        <label>Phone Number:</label>
          <input 
            name="phoneNum"
            type="text"
            placeholder="phone number"
            value={form.phoneNum}
            onChange={handleChange}
          />
        <label>Emergency Phone Number:</label>
          <input 
            name="emergencyNum"
            type="text"
            placeholder="Emergency phone number"
            value={form.emergencyNum}
            onChange={handleChange}
          />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default ParentSignUpForm;