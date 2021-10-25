import React from 'react';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";
import App from "../../App";
import Private from "../../pages/Private";
import Admin from "../../pages/Admin";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";
import PrivateRoute from "../PrivateRoute";


const Routes = () => {
    return (
        <Router>
<Switch>

    <Route exact path='/' component={App}/>
    <PrivateRoute exact path='/private' component={Private}/>
    <Route exact path='/admin' component={Admin}/>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/signin' component={Signin}/>
</Switch>
        </Router>
    );
};

export default Routes;