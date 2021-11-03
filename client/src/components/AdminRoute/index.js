import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function AdminRoute({ component:Component, ...rest }) {
    const auth =  useSelector(s => s.user.auth)
    const user =  useSelector(s => s.user.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth && user.role === "admin" ? (
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