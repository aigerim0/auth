const initialsState = {
    post: {},
    isLoading: true,
    error: ""
}

export const postReducer = (state = initialsState,action) => {
    switch (action.type){
        case "POST_REQUEST":
            return {...state,isLoading: true}
        case "POST_SUCCESS":
            return {...state,post: action.payload, isLoading: false}
        case "POST_FAILED":
            return {...state,isLoading: false, error: action.payload}
        default:
            return state
    }
}