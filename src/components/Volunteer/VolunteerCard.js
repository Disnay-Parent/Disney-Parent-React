import React from "react";

function VolunteerCard(props) {
  //Creating the object, volunteer
  // Will Pair Program with Nathan tomorrow so our Components match
  return (
    <div>
      <h1>Name: {props.volunteer.firstName} {props.volunteer.lastName}</h1>
      <h3>Username: {props.volunteer.username}</h3>
      <h3>Email: {props.volunteer.email}</h3>
    </div>
  );
}

export default VolunteerCard;