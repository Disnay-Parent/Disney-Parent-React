import React from 'react';
import {messages} from '../components/DataTest';
import MessageList from './MessageList';
import Nav from "../components/Navigation/Navigation";

const  Messages = () => {
  return (
    <div>
      <Nav />
      <MessageList messages={messages}/>
    </div>
  );
}

export default Messages;