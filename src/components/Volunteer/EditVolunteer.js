import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom';

const EditVolunteer = (props) => {

    const [credentials, setCredentials] = useState({
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        DOB: props.user.DOB,
        phoneNum: props.user.phoneNum,
        avgPerChild: props.user.avgPerChild,
        type: props.user.type
    });
   console.log(credentials)
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`users/user/edit/${props.user.id}`, credentials)
            .then(res => {
                console.log(res.data)
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
   }

   const handleChanges = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value 
        });
   }

    return(
    <div>
        <h1>Edit Your Account</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <label>First Name:</label>
                <input 
                name="firstName"
                type="text"
                placeholder="First Name"
                value={credentials.firstName}
                onChange={handleChanges}
                />
            </div>
            <div>
            <label>Last Name:</label>
                <input 
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={credentials.lastName}
                onChange={handleChanges}
                />
            </div>
            
            <div>
            <label>Date of Birth:</label>
                <input 
                name="DOB"
                type="date"
                placeholder="dob"
                value={credentials.DOB}
                onChange={handleChanges}
                />
            </div>
            <div>
            <label>Phone Number:</label>
                <input 
                name="phoneNum"
                type="text"
                placeholder="phone number"
                value={credentials.phoneNum}
                onChange={handleChanges}
                />
            </div> 
            <div>
            <label>Average Price per Child: </label>
                <input 
                name="avgPerChild"
                type="text"
                placeholder="Average Price per Child"
                value={credentials.avgPerChild}
                onChange={handleChanges}
                />
            </div>
            <div>
            <button type="submit">Submit Edits</button>
            </div>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        user: state.user
    })
}

export default withRouter(connect(mapStateToProps, {})(EditVolunteer))