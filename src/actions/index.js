import {axiosWithAuth} from "../utils/axiosWithAuth"

export const TEST = "TEST";
export const DELETE_MSG= "DELETE_MSG";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const FETCH_LOGGED_USER_START = "FETCH_LOGGED_USER_START";
export const FETCH_LOGGED_USER_SUCCESS = "FETCH_LOGGED_USER_SUCCESS";
export const FETCH_LOGGED_USER_FAIL = "FETCH_LOGGED_USER_FAIL";
export const LOGOUT = "LOGOUT"

export const userLogin = (credentials) => (dispatch) => {
    console.log("in login action")
        dispatch({type: LOGIN_START})
        axiosWithAuth()
          .post("/auth/login", credentials)
          .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: LOGIN_FAIL, payload: err });
          });
    }

    export const fetchLoggedUser = () => (dispatch) => {
    console.log("fetchLoggedUser in actions")
        dispatch({type: LOGIN_START})
        axiosWithAuth()
          .get("/users/logged")
          .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_LOGGED_USER_SUCCESS, payload: res.data });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_LOGGED_USER_FAIL, payload: err });
          });
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