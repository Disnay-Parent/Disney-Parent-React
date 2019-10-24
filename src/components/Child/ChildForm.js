import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";



const ChildForm = (props) => {


    const childChangeHandler = e => {
        props.setNewChild({...props.newChild,
             [e.target.name]: e.target.value,
              [e.target.DOB]: e.target.value, 
              [e.target.id]: Date.now(),
              [e.target.allergies]: e.target.value, 
              [e.target.special_instructions]: e.target.value, 
              [e.target.medical_conditions]: e.target.value, })

    }

    const addChild = e => {
        if (props.edit) {
        e.preventDefault();
            console.log("AddChild", props);
            axiosWithAuth().post("/children/create" + props.newChild.id, {
                name: props.newChild.name,
                DOB: props.newChild.DOB,
                allergies: props.newChild.allergies,
                special_instructions: props.newChild.special_instructions,
                medical_conditions: props.newChild.medical_conditions
            })
            .then(res => {
                console.log("editChild", res.data)
                props.setNewChild({
                    id: "",
                    name: "",
                    DOB: "",
                    allergies: "",
                    special_instructions: "",
                    medical_conditions: ""
                  });
                  props.setNewGetChild(true);
                })
                .catch(err => console.log(err));
            } else {
              e.preventDefault();
              axiosWithAuth()
                .post("/children/create", props.newChild)
                .then(res => {
                  console.log("ADD", res.data);
                  props.setNewChild({
                    name: "",
                    DOB: "",
                    allergies: "",
                    special_instructions: "",
                    medical_conditions: ""
                  });
                  props.setNewGetChild(true);
                })
                .catch(err => console.log(err));
            }
          };
         
    
        return (

          <div>
          <form onSubmit={addChild}>
            <input type="hidden" name="id" value={props.newChild.id} />
            <input
              type="text"
              name="name"
              value={props.newChild.name}
              onChange={childChangeHandler}
              placeholder="name"
            />
            <input
              type="text"
              name="DOB"
              value={props.newChild.DOB}
              onChange={childChangeHandler}
              placeholder="Date of Birth"
            />
             <input
              type="text"
              name="allergies"
              value={props.newChild.allergies}
              onChange={childChangeHandler}
              placeholder="Allergies"
            />
             <input
              type="text"
              name="special_instructions"
              value={props.newChild.special_instructions}
              onChange={childChangeHandler}
              placeholder="Special Instructions"
            />
             <input
              type="text"
              name="medical_conditions"
              value={props.newChild.medical_conditions}
              onChange={childChangeHandler}
              placeholder="Medical Conditions"
            />
            
            {props.edit ? (
              <button>Edit Child</button>
            ) : (
              <button>Add Child</button>
            )}
          </form>
        </div>
      )
    };

export default ChildForm