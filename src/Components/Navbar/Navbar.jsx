import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from "react-scroll"
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();
  const showButton = location.pathname === "/";

  const navigate = useNavigate();
  const [ sticky , setSticky ] = useState(false);

  useEffect( () => {
    window.addEventListener( 'scroll', () => {
      window.scrollY > 50 ? setSticky( true ) : setSticky( false );
    })
  },[]);



  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true) ;
  }

  const handleLogout = () =>{
    localStorage.removeItem("loggedin");
    navigate("/login");
  }

  return (
    <nav className={ `container ${ sticky ? 'dark-nav' : '' }`} >
      <img className='logo' src={logo} alt="" />
      <ul className={ mobileMenu ? "" : "hide-mobile-menu" } >
        { showButton && <li><Link to="hero" smooth={true} offset={0} duration={500} >Home</Link></li>}
        { showButton && <li><Link to="program" smooth={true} offset={-260} duration={500} >Program</Link></li>}
        { showButton && <li><Link to="about" smooth={true} offset={-150} duration={500} >About Us</Link></li>}
        { showButton && <li><Link to="campus" smooth={true} offset={-260} duration={500} >Campus</Link></li>}
        { showButton && <li><Link to="testimonials" smooth={true} offset={-260} duration={500} >Testimonials</Link></li>}
        { showButton && <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn' >Contact Us</Link></li>}
        { showButton && <li><button onClick={handleLogout} type='button' className='btn' >Log Out</button></li>}
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
