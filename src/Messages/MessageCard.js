import React, {useState} from "react";
import { deleteMessage } from "../actions/index"

const MessageCard = (props) => {

  const [message, setmessage] = useState({});

    const getMessage = e => {
        e.preventDefault();
        axiosWithAuth().get("/users/logged", parent)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log("getMessage", err))
    }

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
