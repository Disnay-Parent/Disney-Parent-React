import React, {useState} from "react";
import MessageCard from "../Messages/MessageCard"
//import { useStateValue } from "./state";


const MessageList = (props) => {
    //const [{ user }, dispatch] = useStateValue(); //not sure if we'll need a useEffect here to update when a message gets deleted, cant test that right now with our current backend

//     return(
//         <div>
//             <h2>{user.firstName}'s Messages</h2>
//             { user.messages.map(msg => {
//                 return <MessageCard msg={msg} /> //using props for messageCard to keep things organized
//             }) }
//         </div>
// )

const [messages, useMessages] = useState(props.messages);

return (
    messages.map(message => (
        <MessageCard message={message}/>
      )))
}
export default MessageList;