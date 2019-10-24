import React from "react"

const Comment = (props) => {

    return (
      <div>
        <p>{props.name}</p>
        <p>{props.comment}</p>
      </div>
    );
}
export default Comment