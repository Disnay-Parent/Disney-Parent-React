import React, {useState} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"


const CreateMessage = (props) => {

    const [post, setPost] = useState({
        post: "",
        location: "",
        time: ""
      })
      
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/posts/create`, post)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }
    
    const handleChanges = event => {
    setPost({
        ...post,
        [event.target.name]: event.target.value 
    });
    }

    return (
        <div>
            <h2>Create a Post</h2>
            <form onSubmit={handleSubmit}>
                <lable>Post description</lable>
                <input
                    name="post"
                    value={post.post}
                    placeholder="description"
                    onChange={handleChanges}
                />
                <lable>location</lable>
                <input
                    name="location"
                    value={post.location}
                    placeholder="location"
                    onChange={handleChanges}
                />
                <lable>time</lable>
                <input
                    name="time"
                    value={post.time}
                    placeholder="time"
                    onChange={handleChanges}
                />
                <button type="submit">Post!</button>
            </form>

        </div>
      )
}

export default CreateMessage