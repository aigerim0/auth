import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './components/Routes'
import './assets/styles/main.css'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
)
