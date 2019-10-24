import React, {useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"

const CommentForm = (props) => {

    const [comment, setComment] = useState({
        body: ""
    })

    const handleChanges = e => {
        setComment({ ...comment, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
            axiosWithAuth
                .post("/comments/create", {
                    comment: comment.body, 
                    post_id: props.id
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
                name="body"
                value={comment.body}
                placeHolder="type your comment here!"
                onChange={handleChanges}
                />
                <button type="submit">Post Comment</button>
            </form>
        </div>
    )
}

export default CommentForm