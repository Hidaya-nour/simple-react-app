import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
 
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener(scroll, ()=>{
      window.scrollY >5 ? setSticky(true) : setSticky(true);
    })
  }, [])

  return (
    <div>
      <nav className= " container dark-nav">
        <img src={logo} alt="logo" />
        <div className='link'>
          <a>home</a>
          <a>about</a>
          <a>program</a>
          <a>campus</a>
          <a>testimonial</a>
          <a><button className='btn'>contact</button></a>

        </div>

      </nav>
      


    </div>
  )
}

export default Navbar
