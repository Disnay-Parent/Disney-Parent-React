import {LOGIN, 
LOGIN_SUCCESS,
LOGIN_FAIL

} from "../actions/index";


const initialState = {
    user: {username: "user placeholder"},
    userlist: {},
    error: "", 
    isFetching: false
  };

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN" :
            return {
                ...state,

                user: action.payload
            }
        default :
            return state
    }
}

// for importing state,
// import { useStateValue } from './state';
// then use 
// const [{ user, userlist }, dispatch] = useStateValue();

// examples: <button onClick={() => dispatch({type: "BUTTON"})}>test</button>

//   const [{ user, userlist }, dispatch] = useStateValue();
//   console.log(user);
//   useEffect(() => {
//     axiosWithAuth()
//       .get("/smurfs")
//       .then(res => {
//         console.log(res);
//         dispatch({
//           type: "TEST",
//           payload: res.data
//         });
//       });
//   }, []);