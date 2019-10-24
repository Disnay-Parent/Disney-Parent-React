import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux"
import { fetchLoggedUser } from "../../actions/index";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function ParentCard(props) {

    const [parent, setParent] = useState({});

    const getParent = e => {
        e.preventDefault();
        axiosWithAuth().get("/users/logged", parent)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log("getParent", err))
    }

    //added axios call to pull in parent data

    //  const changeHandler = event => {

    //     setParent({
    //         ...parent,
    //          [event.target.name]: event.target.value 
    //         });
    // }

    const AccountTitle = styled.div`
        display: flex;
        flex-flow: column;
        border-radius: 15px 15px 0px 0px;
        text-align: center;
        background: #262626;
        color: white;
        margin-bottom: 5px;
    `;

    const AccountData = styled.div`
        display: flex;
        flex-flow: column;
        border-radius: 15px;
    `;

    const AccountHeading = styled.div`
        text-align: center;
        width: 100%;
        background: lightgrey;
        border-bottom: 1px solid grey;
        border-top: 1px solid grey;
        color: black;
    `;

    const AccountSection = styled.div`
        color: black;
    `;

    const Data = styled.span`
        padding-left: 5px;
    `;

    const AccountSubHeading = styled.div`
        margin-top: 10px;
        font-weight: bold
        padding: 5px;
        border-bottom: 1px solid grey;
        border-top: 1px solid grey;
        background: #ececdf;
    `;

    useEffect(() => {
      props.fetchLoggedUser();
    }, []);

    return (
    <AccountData>
        <AccountTitle><h2>Account Details</h2></AccountTitle>
        <AccountHeading><h2>{props.parent.firstName} {props.parent.lastName}</h2></AccountHeading>
        <AccountSection><AccountSubHeading>Username</AccountSubHeading>
            <Data>{props.parent.username}</Data></AccountSection>
        <AccountSection><AccountSubHeading>Email</AccountSubHeading>
            <Data>{props.parent.email}</Data></AccountSection>
        <AccountSection><AccountSubHeading>DOB</AccountSubHeading>
            <Data>{props.parent.DOB}</Data></AccountSection>
        <AccountSection><AccountSubHeading>Phone Number</AccountSubHeading>
            <Data>{props.parent.phoneNum}</Data></AccountSection>
        <AccountSection><AccountSubHeading>Emergency Phone</AccountSubHeading>
            <Data>{props.parent.emergencyPhone}</Data></AccountSection>
    </AccountData>
    );
}

const mapStateToProps = state => {
  return {
    parent: state.user,
    isfetching: state.isfetching
  };
};

export default connect(mapStateToProps, {fetchLoggedUser})(ParentCard)

// Nathan Loveless - author of this component