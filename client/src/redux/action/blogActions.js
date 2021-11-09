import Cookies from 'js-cookie'
import axiosV1 from '../../services/api'

export const newsLoading = () => ({ type: 'NEWS_LOADING' })

export const getNews = () => (dispatch) => {
  dispatch({ type: 'BLOG_REQUEST' })
  const headers = { 'auth-token': Cookies.get('token') }
  axiosV1('http://localhost:8080/api/v1/news', { headers })
    .then(({ data }) => {
      dispatch({ type: 'BLOG_SUCCESS', payload: data })
    })
    .catch(() => {
      dispatch({ type: 'BLOG_FAILED' })
    })
}
