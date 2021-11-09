import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducers'
import blogReducer from './reducers/blogReducers'
import postReducer from './reducers/postReducers'

const rootReducers = combineReducers({
  user: userReducer,
  blog: blogReducer,
  post: postReducer
})

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
