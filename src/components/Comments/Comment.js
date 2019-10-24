import React from "react"

const Comment = (props) => {

    return (
      <div>
        <p>{props.name}</p> 
        <p>{props.comment}</p>
      </div>
    ); //need api documentation, just guessing what the props are
}
export default Comment