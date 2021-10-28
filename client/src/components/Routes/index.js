import React, {useEffect} from 'react';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";
import App from "../../App";
import Private from "../../pages/Private";
import Admin from "../../pages/Admin";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import PrivateRoute from "../PrivateRoute";
import Blog from "../../pages/Blog";
import Create from "../../pages/Create";
import {authentication, clearUser} from "../../lib/authentication";
import Cookies from "js-cookie";
import axios from "axios";
import AdminRoute from "../AdminRoute";
import UserInfo from "../../pages/UserInfo";
import PostInfo from "../../pages/PostInfo";


const Routes = () => {

    useEffect(() => {
        const token = Cookies.get("token")
        axios.post("http://localhost:8080/api/v1/authentication",{token})
            .then(({data}) => authentication(data))
            .catch(() =>  {
                clearUser()
            })
    } , [])

    return (
        <Router>
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