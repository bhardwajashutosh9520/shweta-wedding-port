import React from 'react';
import Style from './header.module.scss'

const Header = (props) => {
  return (
    <div className={`${Style.header} d-flex justify-content-center align-items-center`}>
      <h1>Shweta & Shailesh </h1>
    </div>
  )
}


export default Header;