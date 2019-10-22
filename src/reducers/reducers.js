import {TEST, DELETE_MSG} from "../actions/index"

export const initialState = {
    user: {username: "user placeholder"},
    userlist: {}
  };

export const reducer = (state, action) => {
    switch(action.type){
        case TEST :
            return {
                ...state,
                user: action.payload
            }
        case DELETE_MSG :
            return {
                ...state,
                user: action.payload //replacing current state with the state that's deleted with message
            }
        default :
            return state
    }
}

// for importing state,
// import { useStateValue } from './state';
// then use 
// const [{ user, userlist }, dispatch] = useStateValue();