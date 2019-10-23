import React, {useState} from 'react';
import styled from 'styled-components';

export default function VolunteerCard(props) {

    const [volunteer, setVolunteer] = useState(props.volunteer);

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


    return (
        <AccountData>
            <AccountTitle>
              <h2>Account Details</h2>
            </AccountTitle>
            <AccountHeading>
              <h2>{volunteer.firstName} {volunteer.lastName}</h2>
            </AccountHeading>
            <AccountSection>
                <AccountSubHeading>Username</AccountSubHeading>
                <Data>{volunteer.username}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>Email</AccountSubHeading>
                <Data>{volunteer.email}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>DOB</AccountSubHeading>
                <Data>{volunteer.DOB}</Data>
            </AccountSection>
            <AccountSection>
                <AccountSubHeading>Phone Number</AccountSubHeading>
                <Data>{volunteer.phoneNum}</Data>
            </AccountSection>

            {/* Change to Volunteer Data tonight */}
            
            {/* <AccountSection>
                <AccountSubHeading>Emergency Phone</AccountSubHeading>
                <Data>{volunteer.emergencyPhone}</Data>
            </AccountSection> */}
        </AccountData>
    );
}