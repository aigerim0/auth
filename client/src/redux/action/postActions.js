import axios from 'axios'

export const postLoading = () => ({ type: 'POST_LOADING' })
export const getPost = (id) => (dispatch) => {
  axios(`http://localhost:8080/api/v1/news/${id}`)
    .then(({ data }) => dispatch({ type: 'POST_SUCCESS', payload: data }))
    .catch((error) => {
      dispatch({ type: 'POST_FAILED', payload: error.response.message })
    })
}

export const addComment = (content, newId, userId) => (dispatch) => {
  axios
    .post('http://localhost:8080/api/v1/comments', {
      content,
      news: newId,
      user: userId
    })
    .then(({ data }) => {
      dispatch({ type: 'COMMENT_SUCCESS', payload: data })
    })
}
