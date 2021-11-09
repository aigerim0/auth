import React from 'react'
import GoogleLogin from 'react-google-login'

import { useDispatch } from 'react-redux'
import { loginWithGoogle } from '../../redux/action/userActions'

const Google = () => {
  const dispatch = useDispatch()
  const responseGoogle = (response) => {
    dispatch(loginWithGoogle(response))
  }
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId="769849341124-p8ijladioa96ajl9fmf1jc5fm379orbi.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        render={(renderProps) => (
          <button
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn-danger btn-lg btn-block"
          >
            Login with google
          </button>
        )}
        cookiePolicy="single_host_origin"
      />
    </div>
  )
}

export default Google
