const initialsState = {
  post: {},
  isLoading: true,
  error: ''
}

const postReducer = (state = initialsState, action) => {
  switch (action.type) {
    case 'POST_LOADING':
      return { ...state, isLoading: true }
    case 'POST_SUCCESS':
      return { ...state, post: action.payload, isLoading: false }
    case 'POST_FAILED':
      return { ...state, error: action.payload, isLoading: false }
    case 'COMMENT_SUCCESS':
      return {
        ...state,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload]
        }
      }
    default:
      return state
  }
}

export default postReducer
