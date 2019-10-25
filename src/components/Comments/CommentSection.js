import React, { useState} from "react"
import {axiosWithAuth} from "../../utils/axiosWithAuth"

const CommentSection = (props) => {


   const editComment => {
        axiosWithAuth()
            .get(`/comments/${post_id}`) //need api documentation
            .then(res => {
                console.log("COMMENTS": res.data)
                props.setNewCom({
                    body: res.data.body
                })
            })
            .catch(err => console.log(err))
            props.setEditCom(true);
    }

    const deleteCom = () => {
        // console.log("ID", id);
        axiosWithAuth()
          .delete("/comments/")
          .then(res => {
            console.log("ADD", res.data);
            props.setNewGetCom(true);
          })
          .catch(err => console.log(err));
      };

    return(
        <div>
            {props.com.map(comment => {
                return <button onClick={() => editCom(comment.id)}/>
            })}
            
        </div>
    )
}

export default CommentSection