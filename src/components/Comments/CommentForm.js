import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"
import CommentSection from "./CommentSection"

const CommentForm = (props) => {

    const [comment, setComment] = useState({
        body: ""
    })

    const handleChanges = e => {
        setComment({ 
            ...comment, 
            [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            axiosWithAuth()
                .post("/comments/create", {
                    comment: comment.body, 
                    post_id: props.id,
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
                value={comment.body}
                placeholder="type your comment here!"
                onChange={handleChanges}
                />
                {props.edit ? (
                <div>
                    <button>Edit Comment</button>
                    <button>Delete Comment</button>
                </div>
                ) : (
                    <button type="submit">Add Comment</button>
              )}
            </form>
            <CommentSection />
            {/* comment section wont render unless i put it in here */}
        </div>
    )
}

export default CommentForm