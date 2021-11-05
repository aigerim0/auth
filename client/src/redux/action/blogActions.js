import axiosV1 from "../../services/api";

import Cookies from "js-cookie";
import axios from "axios";
export const getNews = () => {

    return (dispatch) => {
        dispatch({type:"BLOG_REQUEST"})
        const headers = {"auth-token": Cookies.get("token")}
        axiosV1("http://localhost:8080/api/v1/news",{headers})
            .then(({data}) => {
            dispatch({type:"BLOG_SUCCESS",payload: data})
            })
            .catch((error) =>  {
                dispatch({type:"BLOG_FAILED"})
            })
    }
}

