import React from 'react';
import {messages} from '../components/DataTest';
import MessageList from './MessageList';
import Nav from "../components/Navigation/Navigation";
import CreateMessage from './CreateMessage';

const  Messages = () => {
  return (
    <div>
      <Nav />
      <CreateMessage />
      <MessageList />
    </div>
  );
}

export default Messages;