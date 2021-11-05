import axios from "axios";
import {toast} from "react-toastify";

export const getPost = (id) => {
    return(dispatch) => {
        dispatch({type:"POST_REQUEST" })
        axios(`http://localhost:8080/api/v1/news/${id}`)
            .then(({data}) => {
                console.log(data)
                dispatch({type:"POST_SUCCESS",payload:data })

            })   .catch((error) =>  {
            dispatch({type:"POST_FAILED"})
        })
    }
}

export const addComment = (value,newId,userId) => {
    return (dispatch)  => {

        axios.post("http://localhost:8080/api/v1/comments",{...value,news:newId,user: userId})
            .then(({data}) => {
             dispatch({type:"COMMENT_SUCCESS", payload:data})
            })
    }
}