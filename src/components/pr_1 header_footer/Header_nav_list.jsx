import React from 'react'
import React, { Component } from 'react'

class Header_nav_list extends Component {
  render() {
    const nav_home = {
      color: '#333',
      fontSize: '1.375rem',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '1.5625rem',
      position: 'relative',
    }
    return (
      <li><Link className={`${isActive ? style={nav_home} : ''}`} href={link}>{title}</Link></li>
    )
  }
}

export default Header_nav_list