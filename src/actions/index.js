import axios from "axios";

export const TEST = "TEST";

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