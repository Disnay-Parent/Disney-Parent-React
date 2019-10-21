import React from "react";
import Parent from "../Parent/Parent";
import Volunteer from "../Volunteer/Volunteer";
import Child from "../Child/Child";

const Dashboard = () => {
  return (
    <div> 
        <Parent />
        <Volunteer />
        <Child />
    </div>
  );
};

export default Dashboard;