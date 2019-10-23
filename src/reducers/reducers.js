import {DELETE_MSG, LOGOUT, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/index"

export const initialState = {
    user: {username: "user placeholder"},
    userlist: {},
    isFetching: false,
    error: ""
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
          console.log("in reducer, login start")
        return {
          ...state,
          isFetching: true
        };

      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          err: ""
        };

      case LOGIN_FAIL:
        return {
          ...state,
          user: action.payload,
          isFetching: false,
          error: action.payload.error
        };

      case DELETE_MSG:
        return {
          ...state,
          user: action.payload //replacing current state with the state that's deleted with message
        };
      case LOGOUT:
        return {
          ...state,
          user: ""
        };
      default:
        return state;
    }
}

// for importing state,
// import { useStateValue } from './state';
// then use 
// const [{ user, userlist }, dispatch] = useStateValue();