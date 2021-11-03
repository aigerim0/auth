import React, {useEffect} from 'react';
import axiosV1 from "../../services/api";
import {Router, Route, Switch} from "react-router-dom";
import App from "../../App";
import Private from "../../pages/Private";
import Admin from "../../pages/Admin";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import PrivateRoute from "../PrivateRoute";
import Blog from "../../pages/Blog";
import Create from "../../pages/Create";
import AdminRoute from "../AdminRoute";
import UserInfo from "../../pages/UserInfo";
import PostInfo from "../../pages/PostInfo";
import {history} from "../../lib/history";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../redux/action/userActions";
import Loading from "../Loading";


const Routes = () => {
    const dispatch = useDispatch()
    const {isLoadingUserInfo} = useSelector(s => s.user)
    useEffect(() => {
        dispatch(authUser())
    } , [])


    if (isLoadingUserInfo){
        return "LOADING..."
    }
    return (
        <Router history={history}>
            <Switch>

                <Route exact path='/' component={App}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/user/:id' component={UserInfo}/>
                <Route exact path='/news/:id' component={PostInfo}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/signin' component={Signin}/>
                <PrivateRoute exact path='/private' component={Private}/>
                <PrivateRoute exact path='/create-post' component={Create}/>
                <AdminRoute exact path='/admin' component={Admin}/>
            </Switch>
        </Router>
    );
};

export default Routes;