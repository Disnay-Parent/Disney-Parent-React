import React, {useEffect, useState} from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import {axiosWithAuth} from "../../utils/axiosWithAuth"

const CommentSection = (props) => {

    const [comments, setComments] = useState([])
    const post_id = props.id

    useEffect(() => {
        axiosWithAuth
            .get(`/comments/${post_id}`) //need api documentation
            .then(res => {
                console.log(res)
                setComments(res)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {comments.map(comment => {
                return <Comment comment={comment}/>
            })}
            <CommentForm />
        </div>
    )
}

export default CommentSection