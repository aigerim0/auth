const initialsState = {
  news: [],
  isLoading: false,
  error: ''
}

const blogReducer = (state = initialsState, action) => {
  switch (action.type) {
    case 'NEWS_LOADING':
      return { ...state, isLoading: true }
    case 'BLOG_REQUEST':
      return { ...state, isLoading: true }
    case 'BLOG_SUCCESS':
      return { ...state, news: action.payload, isLoading: false }
    case 'BLOG_FAILED':
      return { ...state, isLoading: false, error: action.payload }
    default:
      return state
  }
}

export default blogReducer
