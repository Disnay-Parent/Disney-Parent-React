import {axiosWithAuth} from "../utils/axiosWithAuth";

export const LOGIN = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

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