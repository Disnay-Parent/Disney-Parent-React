import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {axiosWithAuth} from "../../utils/axiosWithAuth";

function VolunteerSignUpForm({errors, touched}, props) {

 

  return (
    <div>
      <h1>Volunteer Sign Up Form</h1>
      <Form>
        <div>
          <label>Username:</label>
          {touched.username && errors.username && <p>{errors.username}</p>}
            <Field 
              name="username"
              type="text"
              placeholder="username"
            />
        </div>
        <div>
          <label>Email:</label>
          {touched.email && errors.email && <p>{errors.email}</p>}
            <Field 
              name="email"
              type="email"
              placeholder="email"
            />
        </div>
        <div>
          <label>Password:</label>
          {touched.password && errors.password && <p>{errors.password}</p>}
            <Field  
              name="password"
              type="password"
              placeholder="password"
            />
        </div>
        <div>
          <label>First Name:</label>
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
            <Field 
              name="firstName"
              type="text"
              placeholder="First Name"
            />
        </div>
        <div>
          <label>Last Name:</label>
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            <Field 
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
        </div>
        <div>
          <label>DOB:</label>
          {touched.DOB && errors.DOB && <p>{errors.DOB}</p>}
            <Field 
              name="DOB"
              type="date"
              placeholder="Age"
            />
        </div>
        <div>
          <label>Phone Number:</label>
          {touched.phoneNum && errors.phoneNum && <p>{errors.phoneNum}</p>}
            <Field 
              name="phoneNum"
              type="text"
              placeholder="phone number"
            />
        </div>
        <div>
          <label>Average Cost Per Child:</label>
          {touched.avgPerChild && errors.avgPerChild && <p>{errors.avgPerChild}</p>}
            <Field 
              name="avgPerChild"
              type="text"
              placeholder="amount"
            />
          </div>
          <div>
            <label>Are you willing to negotiate the cost of service?</label>
            {touched.negotiable && errors.negotiable && <p>{errors.negotiable}</p>}
            <Field 
              name="negotiable"
              type="radio"
              placeholder="amount"
              value={true}
            />
            Yes
            <Field
              name="negotiable"
              type="radio"
              placeholder="amount"
              value={false}
            />
            No
          </div>
          <div>
            <label>CPR Certified</label>
            {touched.cprCertified && errors.cprCertified && <p>{errors.cprCertified}</p>}
            <Field  
              name="cprCertified"
              type="radio"
              value="yes"
            />
            Yes
            <Field
              name="cprCertified"
              type="radio"
              value="no"
            />
            No
          </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </Form>
    </div>
  );
}

 const dash = props => {
   props.history.push("/dashboard");
 };

const VolunteerFormikSignUp = withFormik({
  mapPropsToValues({username, email, password, firstName, 
                    lastName, DOB, phoneNum, avgPerChild,
                    negotiable, cprCertified}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      DOB: DOB || "",
      phoneNum: phoneNum || "",
      avgPerChild: avgPerChild || "",
      negotiable: negotiable || "No",
      cprCertified: cprCertified || "No"
    };
  },

  // Validation Schema
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(6, "Username must have at least 6 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must have at least 6 characters")
      .required("Password is reuired"),
    firstName: Yup.string()
      .min(3, "First name must have at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string()
      .min(3, "Last name must have at least 3 characters")
      .required("Last name is required"),
    DOB: Yup.date()
      .required("Age is required"),
    phoneNum: Yup.number()
      .min(10, "Phone number must be 10 digits long")
      .positive("Phone number must be a positive number")
      .required("Phone number is reuqired"),
    avgPerChild: Yup.number()
      .positive("Average price must be a positive number")
      .required("Average price is reuqired"),
    negotiable: Yup.string()
      .required("Must select 'Yes' or 'No'"),
    cprCertified: Yup.string()
      .required("Must select 'Yes' or 'No'")
  }),
  // End Validation Schema

  handleSubmit(values, formikbag) {
    console.log({ ...values, type: "volunteer" });
    axiosWithAuth()
      .post("/auth/register", { ...values, type: "volunteer" })
      .then(res => {
        console.log(res);
        
        localStorage.setItem("token", res.data.token);
        formikbag.props.history.push("/dashboard")
      })
      .catch(err => console.log(err));
  }

})(VolunteerSignUpForm);

export default VolunteerFormikSignUp;