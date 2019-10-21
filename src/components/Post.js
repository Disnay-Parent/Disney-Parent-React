import React from 'react';
import {withFormik, Form, Field} from 'formik';
import {Route, Link} from 'react-router-dom';
import * as Yup from 'yup';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function Post({errors, touched}) {

  //component possibly needs to be renamed to reflect the component hat the data is being manipulated for...

  // Retrieve Parent's name
  function componentDidMount({setState, state}) {
    fetch(axiosWithAuth())
      .then(res => {
        return res.json();
      })
      .then(data => {
        let parentName = data.results.map((name) => {
          return (
            <div key={name.results}>
              {/* Look at how to set id for link */}
              <Link to="/parent/:id">{name.results.name}</Link>
            </div>
          );
        })
        setState({name: parentName});
        console.log("State", state.parentName)
      })
  }

  return (
    // Get info from user posting and include link to profile
    <div>
      <div>
        Name: <Route path="/parent/:id" component={componentDidMount}/>
      </div>
      <Form>
        <div>
          <label>Date needed for Service:</label>
          {touched.date && errors.date && <p>{errors.date}</p>}
          <Field 
            name="date"
            type="text"
            placeholder="MM/DD/YY"
          />
        </div>
        <div>
          <label>Time needed for Service:</label>
          {touched.time && errors.time && <p>{errors.time}</p>}
          <Field
            name="time"
            type="text"
            placeholder="ex. 1pm-3pm"
          />
        </div>
        <div>
          <label>Amount of Children:</label>
          <Field name="children" component="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Field>
        </div>
        <div>
          <label>Additional Information:</label>
\          <Field 
            name="addInfo"
            type="text"
            placeholder="Additional Information"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  );
}

const PostFormikForm = withFormik({
  mapPropsToValues({date, time, children, addInfo}) {
    return {
      date: date || "",
      time: time || "",
      children: children || "1",
      addInfo: addInfo || ""
    };
  },

  validationSchema: Yup.object().shape({
    date: Yup.number()
      // .date("Must enter a valid date")
      .required("Date is required"),
    time: Yup.string()
      .required("Time is required"),
  }),

  handleSubmit(values, {resetForm, setSubmitting}) {
    axiosWithAuth()
        .post('/volunteer', values)
        .then(res => {
          console.log(res);
          resetForm();
          setSubmitting(true);
        })
        .catch(err => console.log(err));
        setSubmitting(false);
  }
})(Post)

export default PostFormikForm;