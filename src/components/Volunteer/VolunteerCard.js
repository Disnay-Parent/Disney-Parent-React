import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import { fetchLoggedUser } from "../../actions/index";

function VolunteerCard(props) {

    const [volunteer, setVolunteer] = useState({});

    const getVolunteer = e => {
        e.preventDefault();
        axiosWithAuth().get("/users/logged", volunteer)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log("getVolunteer", err))
    }

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
            <AccountTitle>
              <h2>Account Details</h2>
            </AccountTitle>
            <AccountHeading>
              <h2>{props.volunteer.firstName} {props.volunteer.lastName}</h2> <span><Link to="/volunteer-edit"><button>edit</button></Link></span>
            </AccountHeading>
            <AccountSection>
                <AccountSubHeading>Username</AccountSubHeading>
                <Data>{props.volunteer.username}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>Email</AccountSubHeading>
                <Data>{props.volunteer.email}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>DOB</AccountSubHeading>
                <Data>{props.volunteer.DOB}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>Phone Number</AccountSubHeading>
                <Data>{props.volunteer.phoneNum}</Data>
            </AccountSection>

            {/* Change to Volunteer Data tonight */}
            
            {/* <AccountSection>
                <AccountSubHeading>Emergency Phone</AccountSubHeading>
                <Data>{volunteer.emergencyPhone}</Data>
            </AccountSection> */}
        </AccountData>
    );
}
const mapStateToProps = state => {
    return {
      volunteer: state.user,
      isfetching: state.isfetching
    };
  };
  
  export default connect(mapStateToProps, {fetchLoggedUser})(VolunteerCard)