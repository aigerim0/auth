const initialsState = {
    user: {},
    auth: false,
    isLoadingUserInfo: true
}

export const userReducer = (state = initialsState,action) => {
switch (action.type){
    case "USER_SIGNIN":
        return {...state,user: action.payload, auth: true}
    case "USER_LOGOUT":
        return {...initialsState,isLoadingUserInfo: false}
    case "USER_AUTHENTICATE":
        return  {...state,user: action.payload, auth: true,isLoadingUserInfo: false}
    case "USER_AUTHENTICATE_FAILED":
        return {...state, isLoadingUserInfo: false}
    default:
        return state
}
}