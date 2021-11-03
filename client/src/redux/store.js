import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {userReducer} from "./reducers/userReducers";
import thunk from "redux-thunk";
import {blogReducer} from "./reducers/blogReducers";

const rootReducers = combineReducers({
user: userReducer,
    blog:blogReducer
})

export  const  store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)))