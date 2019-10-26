import React from 'react';
import VolunteerCard from '../Volunteer/VolunteerCard';
import AcceptedRequestsCard from '../Statistics/AcceptedRequestsCard';
import RecentRequestsCard from '../Statistics/RecentRequestsCard';
import RecentMessagesCard from '../Statistics/RecentMessagesCard';
import styled from 'styled-components';
import {css} from 'styled-components';
import MqInit from 'styled-components-media-query';

const bp = {s: 500, l: 800}
const mq = MqInit({bp})

const MainContainer = styled.div`
    widthvw: 100%;
    display: flex;
    flex-flow: column;
    border-radius: 15px;
`;

const AccountMainContainer = styled.div`
    widthvw: 98%;
    margin: 10px;
    padding: 10px;
    background: lightblue;
    display: flex;
    border-radius: 15px;
    ${mq(null, 'l')(css`
        width: 100%;
        display: flex;
        flex-flow: column;
        `)}
`;

  const AccountContainer = styled.div`
    width: 30%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    margin-right: 10px;
    background: #f0f0db;
    border-radius: 15px;

    ${mq(null, 'l')(css`
        width: 98%;
        `)}
`;

//   const ChildContainer = styled.div`
//     width: 90%;
//     border: 1px solid black;
//     box-shadow: 2px 2px grey;
//     margin-right: 10px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-content: space-around;
//     border-radius: 15px;

//     ${mq(null, 'l')(css`
//         width: 98%;
//         margin-top: 30px;
//         `)}
// `;

// const ChildTitle = styled.div`
//     display: flex;
//     flex-flow: column;
//     border-radius: 15px 15px 0px 0px;
//     text-align: center;
//     background: #253b57;
//     color: #E0E4E9;
//     width: 100%;
// `;

const StatisticsMainContainer = styled.div`
    widthvw: 98%;
    margin: 10px;
    background: lightblue;
    display: flex;
    flex-flow: column;
    border-radius: 15px;
`;

const StatisticsContainer = styled.div`
    width: 98%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    margin-right: 10px;
    background: #f0f0db;
    border-radius: 15px;
    color: black;
    ${mq(null, 'l')(css`
    width: 98%;
    margin: 20px auto;
    `)}
`;
const StatisticsCards = styled.div`
    display: flex;
    flex-flow: row;
    ${mq(null, 'l')(css`
    width: 100%;
    display: flex;
    flex-flow: column;
    `)}
`;

const StatisticsTitle = styled.div`
    display: flex;
    flex-flow: column;
    border-radius: 15px 15px 0px 0px;
    text-align: center;
    background: #253b57;
    color: #E0E4E9;
    margin-bottom: 5px;
    width: 100%;
`;

export default function Volunteer(props) {
    return (
        <div>
            <MainContainer>
                <AccountMainContainer>
                    <AccountContainer>
                        <VolunteerCard />
                    </AccountContainer>
                    <StatisticsContainer>
                        <AcceptedRequestsCard />
                    </StatisticsContainer>       
                </AccountMainContainer>
                <StatisticsMainContainer>
                <StatisticsTitle><h2>Current Account Activity</h2></StatisticsTitle>
                    <StatisticsCards>
                        <StatisticsContainer>
                            <AcceptedRequestsCard />
                        </StatisticsContainer>
                        <StatisticsContainer>
                            <RecentRequestsCard />
                        </StatisticsContainer>
                        <StatisticsContainer>
                            <RecentMessagesCard />
                        </StatisticsContainer>
                    </StatisticsCards>
                </StatisticsMainContainer>
            </MainContainer>
        </div>
    );
}