import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
// import styled from 'styled-components';

// const ChildTitle = styled.h3`
//     margin-bottom: 400px;
//     padding-top: 10px;
// `;

const ChildList = (props) => {

    
  const editChild= () => {
    axiosWithAuth()
      .get("/children/create")
      .then(res => {
        console.log("EDIT", res.data);
        props.setNewChild({
          name: res.data.name,
          DOB: res.data.DOB, 
          allergies: res.data.allergies,
          special_instructions: res.data.special_instructions,
          medical_conditions: res.data.medical_conditions
        });
      })
      .catch(err => console.log(err));
    props.setEditChild(true);
  };

  const deleteChild = () => {
    // console.log("ID", id);
    axiosWithAuth()
      .delete("/children/")
      .then(res => {
        console.log("ADD", res.data);
        props.setNewGetChild(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      {props.child.map(item => {
        return (
          <div className="card" key={item.id}>
            <div className="buttonBox">
              <button onClick={() => editChild(item.id)} className="button">
                &#9998;
              </button>
              <button onClick={() => deleteChild(item.id)} className="button">
                &#10006;
              </button>
            </div>
            <h3>{item.name}</h3>
            <p>DOB {item.DOB}</p>
            <p> Allergies: {item.allergies}</p>
            <p> Special Instructions: {item.special_instructions} </p>
            <p>Medical Conditions: {item.medical_conditions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChildList;

