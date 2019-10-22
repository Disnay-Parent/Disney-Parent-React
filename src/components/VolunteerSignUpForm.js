import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function VolunteerSignUpForm(props) {

  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    lastName: "",
    email: "",
    age: "",
    phoneNum: "",
    avgPerChild: "",
    negotiable: "",
    cprCertified: true
  });

  const handleChange = evt => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // Post user info to database code goes here
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
          avgPerChild: res.data.avgPerChild,
          negotiable: res.data.negotiable,
          cprCertified: res.data.cprCertified
        });
      })
      .catch(err => console.log(err));
    console.log(form);
  };

  return (
    <div>
      <h1>Volunteer Sign Up Form</h1>
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
        <label>Average Cost Per Child:</label>
          <input 
            name="avgPerChild"
            type="text"
            placeholder="amount"
            value={form.avgPerChild}
            onChange={handleChange}
          />
          <label>Are you willing to negotiate the cost of service?</label>
          <input 
            name="negotiable"
            type="radio"
            placeholder="amount"
            value={true}
            onChange={handleChange}
          />
          Yes
          <input
            name="negotiable"
            type="radio"
            placeholder="amount"
            value={false}
            onChange={handleChange}
          />
          No
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default VolunteerSignUpForm;