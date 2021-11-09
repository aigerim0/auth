import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import App from '../../App'
import Private from '../../pages/Private'
import Admin from '../../pages/Admin'
import Signup from '../../pages/Signup'
import Signin from '../../pages/Signin'
import PrivateRoute from '../PrivateRoute'
import Blog from '../../pages/Blog'
import Create from '../../pages/Create'
import AdminRoute from '../AdminRoute'
import UserInfo from '../../pages/UserInfo'
import PostInfo from '../../pages/PostInfo'
import { history } from '../../lib/history'
import { authUser } from '../../redux/action/userActions'
import Layout from '../Layout'

const Routes = () => {
  const dispatch = useDispatch()
  const { isLoadingUserInfo } = useSelector((s) => s.user)
  const token = Cookies.get('token')
  useEffect(() => {
    if (token) {
      dispatch(authUser())
    }
  }, [])

  if (isLoadingUserInfo && token) {
    return (
      <div className="flex justify-center">
        <div className="orbit-spinner loading">
          <div className="orbit" />
          <div className="orbit" />
          <div className="orbit" />
        </div>
      </div>
    )
  }
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/user/:id" component={UserInfo} />
          <Route exact path="/news/:id" component={PostInfo} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/create-post" component={Create} />
          <AdminRoute exact path="/admin" component={Admin} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default Routes
