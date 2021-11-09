import React from 'react'
import './style.css'

const Loading = () => (
  <div>
    <div className="flex justify-center">
      <div className="orbit-spinner loading">
        <div className="orbit" />
        <div className="orbit" />
        <div className="orbit" />
      </div>
    </div>
  </div>
)

export default Loading
