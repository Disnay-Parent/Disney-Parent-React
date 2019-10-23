import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';

const ChildData = styled.div`
    display: flex;
    flex-flow: column;
    width: 30%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    background: #b0e8b0;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-radius: 15px;
`;

const ChildHeading = styled.div`
    text-align: center;
    font-weight: bold;
    width: 100%;
    background: lightgrey;
    border-bottom: 1px solid grey;
    border-radius: 15px 15px 0px 0px;
    color: black;
`;

const AccountSection = styled.div`
    font-size: 0.8em;
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
    background: #bddbcc;
`;

export default function Child(props) {
    const [children, setChildren] = useState(props.child);

    return (
        children.map(child => (
            <ChildData>            
                <ChildHeading>{child.firstName} {child.lastName}</ChildHeading>
                <AccountSection>
                    <AccountSubHeading>Age</AccountSubHeading>
                    <Data>{child.age}</Data>
                </AccountSection>
                <AccountSection>
                    <AccountSubHeading>Medical Conditions</AccountSubHeading>
                    <Data>{child.medicalConditions}</Data>
                </AccountSection>
                <AccountSection>
                    <AccountSubHeading>Special Instructions</AccountSubHeading>
                    <Data>{child.specialInstructions}</Data>
                </AccountSection>
            </ChildData>
        ))
    )
}