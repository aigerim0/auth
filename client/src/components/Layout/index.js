import React from 'react'
import Header from '../Header'

const Layout = ({ children }) => (
  <div>
    <Header />

    <div className="container mx-auto my-4 ">{children}</div>
  </div>
)

export default Layout
