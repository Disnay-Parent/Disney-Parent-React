import React from "react";
import MessageCard from "../Messages/MessageCard"
import { useStateValue } from "./state";

const MessageList = () => {
    const [{ user }, dispatch] = useStateValue(); 

    return(
        <div>
            <h2>{user.firstName}'s Messages</h2>
            { user.messages.map(msg => {
                return <MessageCard msg={msg} /> //using props for messageCard to keep things organized
            }) }
        </div>
)

}
export default MessageList;