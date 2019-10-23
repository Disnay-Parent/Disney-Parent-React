import React from "react";
import Parent from "../Parent/Parent";
import Volunteer from "../Volunteer/Volunteer";
import Child from "../Child/Child";
// import {reducer} from "../../reducers/reducers";
import Nav from "../Navigation/Navigation"
import {useState} from 'react'

const Dashboard = () => {
  // const {user, setUser} = useState(reducer())
  return (
    <div> 
        <Nav />
        <Parent />
        <Volunteer />
        <Child />
    </div>
  );
};

export default Dashboard;