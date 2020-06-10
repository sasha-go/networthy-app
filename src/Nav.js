import { Link } from 'react-router-dom'
import React, { Component } from 'react'


class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/dashboard'>
          Dashboard
        </Link>
        <Link to='/sign-up'>
          Sign Up
        </Link>
      </div>
    )
  }
}

export default Nav;

