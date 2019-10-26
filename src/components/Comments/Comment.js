import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";
import IndividualComment from "./IndividualComment"
// import styled from 'styled-components';
import {connect} from "react-redux"



const Comment = (props) => {
  const [com, setCom] = useState([]);
  const [newGetCom, setNewGetCom] = useState();
  const [editCom, setEditCom] = useState(false);
  const [newCom, setNewCom] = useState({
    name: "",
    DOB: "",
    
  });

  useEffect(() => {
    setNewGetCom(false);
    axiosWithAuth()
      .get(`comments/comment/${props.user_id}`)
      .then(res => {
        console.log("GET", res.data);
        setCom(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetChild]);

  return (
    <div className="comment">
      <CommentForm
        comment={com}
        setNewGetCom={setNewGetCom}
        setEditCom={setEditCom}
        newCom={newCom}
        setNewCom={setNewCom}
        id={props.id}
      />
      {/* <CommentSection
        com={com}
        setNewGetCom={setNewGetCom}    comment section doesnt render here, put it inside comment form
        setEditCom={setEditCom}
        newCom={newCom}
        setNewCom={setNewCom}
        editCom={editCom}
      /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    user_id: state.user.id
  })

}

export default connect(mapStateToProps, {})(Comment);