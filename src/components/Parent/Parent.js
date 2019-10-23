import React, {useState} from 'react'
import ParentCard from './ParentCards'
import Child from "../Child/Child"

const Parent = (props) => {

  const { user, setUser}= useState({});
  setUser(props.user);
  
  return (
    <div> 
      <ParentCard />
      <Child />
      {/* <RecentPostForm />
      <RecentMessageForm /> */}
    </div>
  );
};

export default Parent;