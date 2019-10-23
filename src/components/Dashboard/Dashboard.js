import React, {useEffect} from "react";
import Parent from "../Parent/Parent";
import Volunteer from "../Volunteer/Volunteer";
import Child from "../Child/Child";
// import {reducer} from "../../reducers/reducers";
import Nav from "../Navigation/Navigation"
import {useState} from 'react'
import {connect} from "react-redux"
import {fetchLoggedUser} from "../../actions/index"

const Dashboard = (props) => {
  // const {user, setUser} = useState(reducer())
  useEffect(() => {
    
  }, [])
  return (
    <div> 
        <Nav />
        <Parent />
        {/* <Volunteer />
        <Child /> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, {fetchLoggedUser})(Dashboard);