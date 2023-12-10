import './Navbar.css'
import React, { useEffect, useState, useRef } from 'react'
import logo from '../../resources/monitor-logo.png'
import vid from "../../resources/wavy.mp4"

const Navbar = () => {
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current.volume = .15
  }, [])

  return (
    <div className='Navbar'>
        <a href='#top'>
          <img src={logo} className='logo'/>
          <div className='logo-top-layer'></div>
        </a>
        <nav className='nav-directory'>
            <a href='#About' className='page-link'>About</a>
            <a href='#Projects' className='page-link'>Projects</a>
            <div className='divider'></div>
            <a className= 'personal-link' id='personal-linkedin' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/evan-swanson-5baa80158/'>LinkedIn</a>
            <a className= 'personal-link' id='personal-github' target='_blank' rel='noopener noreferrer' href='https://github.com/EvanSSwanson'>GitHub</a>
            <p id='personal-email'>evan.sundelius@gmail.com</p>
            <p id='optional-vibe'>optional_vibe...</p>
            <video id='video' ref={videoRef} loop playsinline controls>
              <source src={vid} type="video/mp4" />
            </video>
        </nav>
    </div>
  )
}

export default Navbar