import React, {useState} from 'react';
import VolunteerCard from '../Volunteer/VolunteerCard';
import AcceptedRequestsCard from '../Statistics/AcceptedRequestsCard';
import RecentRequestsCard from '../Statistics/RecentRequestsCard';
import RecentMessagesCard from '../Statistics/RecentMessagesCard';
import Nav from '../Navigation/Navigation';
import styled from 'styled-components';

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
`;

const AccountContainer = styled.div`
    width: 20%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    margin-right: 10px;
    background: #f0f0db;
    border-radius: 15px;
`;

const AcceptedRequestsContainer = styled.div`
    width: 90%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    margin-right: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    border-radius: 15px;
`;

// const AcceptedRequestsTitle = styled.div`
//     display: flex;
//     flex-flow: column;
//     border-radius: 15px 15px 0px 0px;
//     text-align: center;
//     background: #262626;
//     color: white;
//     margin-bottom: 5px;
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
    width: 30%;
    border: 1px solid black;
    box-shadow: 2px 2px grey;
    margin-right: 10px;
    background: #f0f0db;
    border-radius: 15px;
    color: black;
`;

const StatisticsCards = styled.div`
    display: flex;
    flex-flow: row;
`;

const StatisticsTitle = styled.div`
    display: flex;
    flex-flow: column;
    border-radius: 15px 15px 0px 0px;
    text-align: center;
    background: #262626;
    color: white;
    margin-bottom: 5px;
    width: 100%;
`;

export default function Volunteer(props) {
    const [volunteer, setVolunteer] = useState(props.user);

    return (
        <div>
           
                
            <VolunteerCard/>
                   
          
        </div>
    );
}
