import React from 'react'

const NavigationBar = () => {
  return (
    <nav className='container'>
        <div>
          <img src='/images/brand_logo.png' alt='logo'/>
        </div>
        <ul>
          <li href='#'>Menu</li>
          <li href='#'>Location</li>
          <li href='#'>About</li>
          <li href='#'>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
  )
}

export default NavigationBar