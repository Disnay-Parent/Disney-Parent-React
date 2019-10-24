import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";



const ChildForm = (props) => {


    const childChangeHandler = e => {
        props.setNewChild({...props.newChild,
             [e.target.name]: e.target.value,
              [e.target.age]: e.target.value, 
              [e.target.email]: e.target.value, 
              [e.target.id]: Date.now()})
    }

    const addChild = e => {
        if (props.edit) {
        e.preventDefault();
            console.log("AddChild", props);
            axiosWithAuth().post("/children" + props.newChild.id, {
                name: props.newChild.name,
                age: props.newChild.age,
                email: props.newChild.email
            })
            .then(res => {
                console.log("editChild", res.data)
                props.setNewChild({
                    id: "",
                    name: "",
                    age: "",
                    email: ""
                  });
                  props.setNewGetChild(true);
                })
                .catch(err => console.log(err));
            } else {
              e.preventDefault();
              axiosWithAuth()
                .post("/children", props.newChild)
                .then(res => {
                  console.log("ADD", res.data);
                  props.setNewChild({
                    name: "",
                    age: "",
                    email: ""
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
              name="age"
              value={props.newChild.age}
              onChange={childChangeHandler}
              placeholder="age"
            />
            <input
              type="email"
              name="email"
              value={props.newChild.email}
              onChange={childChangeHandler}
              placeholder="email"
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