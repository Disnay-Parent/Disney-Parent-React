import React from "react";
import Parent from "../Parent/Parent";
import Volunteer from "../Volunteer/Volunteer";
import Child from "../Child/Child";
import {reducer} from "../../reducers/reducers";
import {useState} from 'react'

const Dashboard = () => {
  const {user, setUser} = useState(reducer())
  return (
    <div> 
        <Parent />
        <Volunteer />
        <Child />
    </div>
  );
};

export default Dashboard;