import React from "react";
import { deleteMessage } from "../actions/index"

const MessageCard = (msg) => {

    return (
      <div>
        <h3>{msg.title}</h3> {/* I'm just assuming what the backend properties will be*/}
        <h4>from: {msg.user}</h4>
        <p>{msg.body}</p> 
        <button onClick={() => deleteMessage(msg.id)}>Delete message</button>
        {/* grabbing DELETE_MSG from our actions and giving it the id of the post so it deletes the right one
            The process should be similar when we add replying to the message */}
      </div>
    );
};

export default MessageCard;
