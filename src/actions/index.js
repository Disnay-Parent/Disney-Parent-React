import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export const TEST = "TEST";
export const DELETE_MSG= "DELETE_MSG"

export const testAction = () => {
    return(dispatch) => {
        dispatch({type: TEST})

        //need to add axios call for reducer actions

        axios.get("")
        .then(res => {
            console.log(res.data);
            dispatch({type: TEST, payload: res.data})
        })
        .catch(err => {
            console.log("test action", err);
            dispatch({type: TEST, payload: err + "ERROR ON TEST"})
        })
    }

}

export const deleteMessage = (id) => dispatch => {
    console.log(`message ${id} is being deleted`)

    axiosWithAuth
        .delete(`/user/message${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({type: DELETE_MSG, payload: res.data}) //the message is deleted on the server but now we update our state to be the same as the server's
        })
        .catch(err => console.log(err))
}