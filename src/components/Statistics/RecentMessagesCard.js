import React from 'react';
// import MessageList from '../../Messages/MessageList';

export default function RecentMessagesCard(props) {
    return ( 
        <div>
            <div>Recent Messages Area</div>
            {/* <MessageList /> */}
        </div>
    );
}

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