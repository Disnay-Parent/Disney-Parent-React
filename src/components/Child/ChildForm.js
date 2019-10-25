import React from "react";
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import styled from 'styled-components';
import {css} from 'styled-components';
import MqInit from 'styled-components-media-query';

const bp = {s: 500, l: 800}
const mq = MqInit({bp})

const ChildText = styled.div`
    margin-bottom: 400px;
`;

const Buttons = styled.button`
    margin-top: 10px;

    ${mq(null, 'l')(css`
    display: flex;
    flex-flow: column;
    margin: 10px auto;
    `)}
`;

const ChildInput = styled.span`
${mq(null, 'l')(css`
display: flex;
flex-flow: column;
margin: 10px auto;
`)}
`;

const ChildForm = (props) => {

  console.log(props.newChild)

    const childChangeHandler = e => {
        props.setNewChild({...props.newChild,
             [e.target.name]: e.target.value})

    }

    const addChild = e => {
        if (props.edit) {
        e.preventDefault();
            console.log("AddChild", props);
            axiosWithAuth().post("/children/create/", {
                name: props.newChild.name,
                DOB: props.newChild.DOB,
                allergies: props.newChild.allergies,
                special_instructions: props.newChild.special_instructions,
                medical_conditions: props.newChild.medical_conditions
            })
            .then(res => {
                console.log("editChild", res.data)
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
            <ChildText>
          <form onSubmit={addChild}>
            <ChildInput>
              <input
                type="text"
                name="name"
                value={props.newChild.name}
                onChange={childChangeHandler}
                placeholder="name"
              />
              </ChildInput>
              <ChildInput>
              <input
                type="text"
                name="DOB"
                value={props.newChild.DOB}
                onChange={childChangeHandler}
                placeholder="Date of Birth"
              />
              </ChildInput>
              <ChildInput>
              <input
                type="text"
                name="allergies"
                value={props.newChild.allergies}
                onChange={childChangeHandler}
                placeholder="Allergies"
              />
              </ChildInput>
              <ChildInput>
              <input
                type="text"
                name="special_instructions"
                value={props.newChild.special_instructions}
                onChange={childChangeHandler}
                placeholder="Special Instructions"
              />
              </ChildInput>
              <ChildInput>
              <input
                type="text"
                name="medical_conditions"
                value={props.newChild.medical_conditions}
                onChange={childChangeHandler}
                placeholder="Medical Conditions"
              />
              </ChildInput>
              
              {props.edit ? (
                <Buttons>Edit Child</Buttons>
              ) : (
                <Buttons>Add Child</Buttons>
              )}
          </form>
          </ChildText>
      )
    };

export default ChildForm