import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ChildList from "./ChildList";
import ChildForm from "./ChildForm";
import styled from 'styled-components';
import {connect} from "react-redux"

const ChildTitle = styled.h1`
    padding-top: 10px;
`;

const Children = (props) => {
  const [child, setChild] = useState([]);
  const [newGetChild, setNewGetChild] = useState();
  const [editChild, setEditChild] = useState(false);
  const [newChild, setNewChild] = useState({
    name: "",
    DOB: "",
    allergies: "",
    special_instructions: "",
    medical_conditions: ""
  });

  useEffect(() => {
    setNewGetChild(false);
    axiosWithAuth()
      .get(`/children/user/${props.user_id}`)
      .then(res => {
        console.log("GET", res.data);
        setChild(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetChild]);

  return (
    <div className="children">
      <ChildTitle>Add a New Child!</ChildTitle>
      <ChildForm
        child={child}
        setNewGetChild={setNewGetChild}
        setEditChild={setEditChild}
        newChild={newChild}
        setNewChild={setNewChild}
        edit={editChild}
      />
      <ChildList
        child={child}
        setNewGetChild={setNewGetChild}
        setEditChild={setEditChild}
        newChild={newChild}
        setNewChild={setNewChild}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    user_id: state.user.id
  })

}

export default connect(mapStateToProps, {})(Children);