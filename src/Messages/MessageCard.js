import React, {useState} from "react";
// import { deleteMessage } from "../actions/index"
import styled from 'styled-components';
// import {axiosWithAuth} from "../utils/axiosWithAuth";
import Comment from "../components/Comments/CommentForm";

const CardContainer = styled.div`
    width: 98%;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 20px;
    border: 2px solid #253b57;
    
`;

const MessageTitle = styled.h2`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Headings = styled.h4`
    background-color: #f0f0db;
`;

const MessageCard = (props) => {

  // const [message, setmessage] = useState({});

  //   const getMessage = e => {
  //       e.preventDefault();

  //       axiosWithAuth().get("/posts/")
  //       .then(res => {
  //           console.log(res.data)
  //           localStorage.setItem("token", res.data.token)
  //       })
  //       .catch(err => console.log("getMessage", err))
  //   }

    

  //   return (
  //     <div>
  //       <h3>{msg.title}</h3> {/* I'm just assuming what the backend properties will be*/}
  //       <h4>from: {msg.user}</h4>
  //       <p>{msg.body}</p> 
  //       <button onClick={() => deleteMessage(msg.id)}>Delete message</button>
  //       {/* grabbing DELETE_MSG from our actions and giving it the id of the post so it deletes the right one
  //           The process should be similar when we add replying to the message */}
  //     </div>
  //   );
  return (
    <div>
      <CardContainer>
          <MessageTitle>{props.message.location} @ {props.message.time}</MessageTitle>
          <Headings>Location</Headings>
          <span>{props.message.location}</span>
          <Headings>Time</Headings>
          <span>{props.message.time}</span>
          <Headings>Comments</Headings>
          <Comment id={props.message.id} />
          {/*<div><CommentForm id={props.message.post} /></div>*/}
      </CardContainer>
      
    </div>
  );
};

export default MessageCard;
