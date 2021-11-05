import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducers";
import thunk from "redux-thunk";
import {blogReducer} from "./reducers/blogReducers";
import {postReducer} from "./reducers/postReducers";

const rootReducers = combineReducers({
    user: userReducer,
    blog:blogReducer,
    post:postReducer
})

export  const  store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))