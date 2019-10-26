import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import {connect} from "react-redux"
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const InputField = styled.div`
    padding: 10px;
`;

const ChildEditTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;

const EditChild = (props) => {

    const [credentials, setCredentials] = useState({
        id: Date.now(),
        name: props.children.name,
        DOB: props.children.DOB,
        allergies: props.children.allergies,
        special_instructions: props.chilren.special_instructions,
        medical_conditions: props.children.medical_conditions
        
    });
   console.log(credentials)
    const handleSubmit = e => {
        e.preventDefault();


        axiosWithAuth()
            .put("children/edit/")
            console.log("CHILD PROPS", props.id)
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
        <ChildEditTitle>Edit Your Account</ChildEditTitle>
        <form onSubmit={handleSubmit}>
            <InputField>
                <input 
                name="name"
                type="text"
                placeholder="Child Name"
                value={credentials.name}
                onChange={handleChanges}
                />
            </InputField>
           
            <InputField>
                <input 
                name="DOB"
                type="date"
                placeholder="DOB"
                value={credentials.DOB}
                onChange={handleChanges}
                />
            </InputField>
            <InputField>
                <input 
                name="allergies"
                type="text"
                placeholder="Allergies"
                value={credentials.allergies}
                onChange={handleChanges}
                />
            </InputField>
            <InputField>
                <input 
                name="special_instructions"
                type="text"
                placeholder="Special Instructions"
                value={credentials.special_instructions}
                onChange={handleChanges}
                />
            </InputField>
            <InputField>
                <input 
                name="medical_conditions"
                type="text"
                placeholder="Medical Conditions"
                value={credentials.medical_conditions}
                onChange={handleChanges}
                />
            </InputField>
            <InputField>
            <button type="submit">Submit Edits</button>
            </InputField>
        </form>
    </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        children: state.children
    })
}

export default withRouter(connect(mapStateToProps, {})(EditChild))