import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {isAuth} from "../../lib/authentication";

function PrivateRoute({ component:Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth()? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;