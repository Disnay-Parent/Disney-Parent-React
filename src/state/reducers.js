import {axiosWithAuth} from "../utils/axiosWithAuth"

export const initialState = {
    user: "testuser",
    userlist: {}
  };

export const reducer = (state, action) => {
    switch(action){
        case "TEST" :            
            return {
                ...state,
                user: 'new username'
            }
        default :
            return state
    }
}

// for importing state,
// import { useStateValue } from './state';
// then use 
// const [{ user, userlist }, dispatch] = useStateValue();
// example <button onClick={() => dispatch("TEST")}>test</button>