import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"

const CommentForm = (props) => {

    // const [comment, setComment] = useState({
    //     body: ""
    // })

    const handleChanges = e => {
        props.setNewCom({ ...props.newCom, 
            [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            axiosWithAuth
                .post("/comments/create", {
                    comment: props.newCom.body, 
                    post_id: props.newCom.id,
                })
                .then(res => {
                    console.log(res)
                    setComment({body: ""})
                })
                .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="body"
                value={props.newCom.body}
                placeHolder="type your comment here!"
                onChange={handleChanges}
                />
                {props.edit ? (
                <div>
                <button>Edit Comment</button>
                <button>Delete Comment</button>
                </div>
              ) : (
                <button>Add Comment</button>
              )}
            </form>
        </div>
    )
}

export default CommentForm