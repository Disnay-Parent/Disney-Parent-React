import axios from "axios";
import {axiosWithAuth} from "../utils/axiosWithAuth"

export const TEST = "TEST";
export const DELETE_MSG= "DELETE_MSG";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT"

export const login = () => {
    return(dispatch) => {
        dispatch({type: LOGIN})

        //need to add axios call for reducer actions
        axiosWithAuth().post("/auth/login", )
        .then(res => {
            console.log(res.data);
             localStorage.setItem("token", res.data.payload);
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log("test action", err);
            dispatch({type: LOGIN_FAIL, payload: err + "ERROR ON TEST"})
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

export const logOut = (id) => dispatch => {
    console.log()
    dispatch({TYPE: LOGOUT})
    
}