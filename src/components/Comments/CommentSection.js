import React from "react"
import Comment from "./Comment"

const CommentSection = () => {


    return(
        <div>
            {Comments.map(comment => {
                return <Comment comment={comment}/>
            })}
            <CommentForm />
        </div>
    )
}

export default CommentSection