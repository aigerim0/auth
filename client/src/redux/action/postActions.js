import axios from "axios";
import {toast} from "react-toastify";
export const  postLoading =() => {
    return {"type": "POST_LOADING"}
}
export const getPost = (id) => {
    return(dispatch) => {
        axios(`http://localhost:8080/api/v1/news/${id}`)
            .then(({data}) => {
                console.log(data)
                dispatch({type:"POST_SUCCESS",payload:data })

            })   .catch((error) =>  {
            dispatch({type:"POST_FAILED", payload: error.response.message})
        })
    }
}

export const addComment = (content,newId,userId) => {
    return (dispatch)  => {

        axios.post("http://localhost:8080/api/v1/comments",{content,news:newId,user: userId})
            .then(({data}) => {
             dispatch({type:"COMMENT_SUCCESS", payload:data})
            })
    }
}