import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {isAuth} from "../../lib/authentication";

function AdminRoute({ component:Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth() && isAuth().role === "admin" ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default AdminRoute;