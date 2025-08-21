import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
    </div>
  )
}

export default Navigation