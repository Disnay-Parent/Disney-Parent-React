import React from 'react';
import {useState} from 'react-dom';
import {messages} from '../components/DataTest';
import MessageList from './MessageList';

const  Messages = () => {
  return (
    <MessageList messages={messages}/>
  );
}

export default Messages;