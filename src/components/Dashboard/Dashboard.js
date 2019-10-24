import React, {useEffect, useState} from "react";
import Parent from "../Parent/Parent";
import Volunteer from "../Volunteer/Volunteer";
import Child from "../Child/Child";
// import {reducer} from "../../reducers/reducers";
import Nav from "../Navigation/Navigation"
import {connect} from "react-redux"
import {fetchLoggedUser} from "../../actions/index"

const Dashboard = (props) => {
  
  // const [userType, setUserType] = useState(props.userType)
  
  // useEffect(() => {
  //   console.log(props.userType)
  //   props.fetchLoggedUser()
  // }, [])



  // let userDashboard

  // if (userType == "parent") {
  //   userDashboard = <Parent />
  //   console.log(userDashboard);
  // } else if (userType == "volunteer") {
  //   userDashboard = <Volunteer />
  //   console.log(userDashboard);
  // }

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
    userType: state.user.type,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {fetchLoggedUser})(Dashboard);