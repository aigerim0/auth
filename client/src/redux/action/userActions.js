import axios from "axios";
import Cookie from "js-cookie";
import {history} from "../../lib/history";
import axiosV1 from "../../services/api";

export const signIn = (data) => {
return (dispatch) => {
    axios.post("http://localhost:8080/api/v1/signin", data)
        .then(({data}) => {

            Cookie.set("token",data.token,{expires:1})
            dispatch({type: "USER_SIGNIN", payload: data.user})
            history.push("/")
        })
}
}

export  const logout = () => {
    Cookie.remove("token")
    return {type: "USER_LOGOUT"}
}

export const authUser = () => {
    return (dispatch) => {

        axiosV1.get("http://localhost:8080/api/v1/authentication")
            .then(({data}) => {
                dispatch({type: "USER_AUTHENTICATE", payload: data.user})
                Cookie.add("token", data.token)
            })
            .catch(() =>  {
                dispatch({type: "USER_AUTHENTICATE_FAILED"})
            })
    }
}