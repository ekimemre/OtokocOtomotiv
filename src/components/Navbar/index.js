import React from 'react'
import UserIcon from '../../svg/UserIcon'
import Logo from '../../images/Otokoc-Otomotiv-Logo.png'
import './index.css'

const Navbar = () => {
  return (
    <div>
      <div className='profile'>
        <UserIcon />
        <p className='username'>John Doe</p>
      </div>
      <img className='logo' src={Logo} alt="Otokoc-Otomotiv" />
    </div>
  )
}

export default Navbar
