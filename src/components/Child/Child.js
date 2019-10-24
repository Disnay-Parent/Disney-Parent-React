import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import ChildList from "./ChildList";
import ChildForm from "./ChildForm";

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
      .get("/api/children/user/:id")
      .then(res => {
        console.log("GET", res.data);
        setChild(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetChild]);

  return (
    <div className="children">
      <h1>Add a New Child!</h1>
      <ChildList
        child={child}
        setNewGetChild={setNewGetChild}
        setEditChild={setEditChild}
        newChild={newChild}
        setNewChild={setNewChild}
      />
      <ChildForm
        child={child}
        setNewGetChild={setNewGetChild}
        setEditChild={setEditChild}
        newChild={newChild}
        setNewChild={setNewChild}
        edit={editChild}
      />
    </div>
  );
};

export default Children;