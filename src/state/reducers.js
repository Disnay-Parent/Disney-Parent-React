const initialState = {
    user: "testuser"
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "example" :
            return (
                state
            )
        default :
            return state
    }
}
