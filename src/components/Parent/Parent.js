import React, {useState} from 'react'
import { userInfo } from "os";

const Parent = (props) => {

  const { user, setUser}= useState({props.user});
  return (
    <div> 
      <ParentCard />
      <ChildForm />
      <RecentPostForm />
      <RecentMessageForm />
    </div>
  );
};

export default Parent;