// import React from 'react';
// // import MessageList from '../../Messages/MessageList';

// export default function RecentMessagesCard(props) {
//     return ( 
//         <div>
//             <div>Recent Messages Area</div>
//             {/* <MessageList /> */}
//         </div>
//     );
// }

// Started Working on this component to give it state, 
// but MessageCard needs alternations for this to work.

// import React, {useState, useEffect} from 'react';
// import {axiosWithAuth} from '../../utils/axiosWithAuth';
// import MessageList from '../../Messages/MessageList';

// const RecentMessagesCard = () => {
//     const [messages, setMessages] = useState([]);
  
//     useEffect(() => {
//       axiosWithAuth()
//         .get("/messages")
//         .then(res => {
//           console.log("GET", res.data);
//           setMessages(res.data);
//         })
//         .catch(err => console.log(err));
//     }, [messages]);
  
//     return (
//       <div>
//         <div>Recent Messages Area</div>
//         <MessageList messages={messages} />
//       </div>
//     );
//   };
  
//   export default RecentMessagesCard;

import React from 'react';
import {comments} from '../DataTest';
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

export default function RecentMessagesCard(props) {
const commentData = comments.slice(0, 4).map(c => {
    return (
    <AcceptedRequestsData>
        <ApprovedRequestHeading key={c.post_id}>{c.comment}</ApprovedRequestHeading>
    </AcceptedRequestsData>
    );
    });
    return ( 
        <div>
            <ApprovedRequestTitle>Recent Comments</ApprovedRequestTitle>
            {commentData}
        </div>
    );
}