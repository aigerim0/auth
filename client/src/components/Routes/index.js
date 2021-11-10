import React, { useEffect, Suspense, lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import App from '../../App'
import AdminRoute from '../AdminRoute'
import PrivateRoute from '../PrivateRoute'
import { history } from '../../lib/history'
import { authUser } from '../../redux/action/userActions'
import Layout from '../Layout'
import Loading from '../Loading'

const Signup = lazy(() => import('../../pages/Signup'))
const Signin = lazy(() => import('../../pages/Signin'))
const Private = lazy(() => import('../../pages/Private'))
const Admin = lazy(() => import('../../pages/Admin'))
const Blog = lazy(() => import('../../pages/Blog'))
const Create = lazy(() => import('../../pages/Create'))
const UserInfo = lazy(() => import('../../pages/UserInfo'))
const Membership = lazy(() => import('../../pages/Membership'))
const PostInfo = lazy(() => import('../../pages/PostInfo'))

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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/user/:id" component={UserInfo} />
            <Route exact path="/news/:id" component={PostInfo} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/private" component={Private} />
            <PrivateRoute exact path="/create-post" component={Create} />
            <PrivateRoute exact path="/create-post" component={Membership} />
            <AdminRoute exact path="/admin" component={Admin} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default Routes
