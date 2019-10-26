import React from 'react';
import {messages} from '../DataTest';
import styled from 'styled-components';

const AcceptedRequestsData = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-radius: 15px;
`;

const ApprovedRequestTitle = styled.div`
    background: #253b57;
    border-bottom: 1px solid grey;
    border-radius: 15px 15px 0px 0px;
    text-align: center;
    font-size: 1.2em;
    color: #E0E4E9;
`;

const ApprovedRequestHeading = styled.div`
    text-align: center;
    font-weight: bold;
    width: 100%;
    border-bottom: 1px solid grey;
    background-color: lightgrey;
    margin-top: 5px;
    border-top: 1px solid black;
`;

const ApprovedRequestSection = styled.div`
    font-size: 0.8em;
`;

const Data = styled.span`
    padding-left: 5px;
`;

const ApprovedRequestSubHeading = styled.div`
    margin-top: 10px;
    font-weight: bold
    padding: 5px;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    background: #ececdf;
`;

export default function RecentRequestsCard(props) {
const messageData = messages.slice(0, 3).map(m => {
    return (
    <AcceptedRequestsData>
        <ApprovedRequestHeading key={m.post}>{m.location}</ApprovedRequestHeading>
        <ApprovedRequestSection>
                <ApprovedRequestSubHeading>TimeStamp</ApprovedRequestSubHeading>
                <Data key={m.post}>{m.time}</Data>
        </ApprovedRequestSection>
    </AcceptedRequestsData>
    );
    });
    return ( 
        <div>
            <ApprovedRequestTitle>Recent Messages</ApprovedRequestTitle>
            {messageData}
        </div>
    );
}