import { Link } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
    return (
    <nav className="navbar sticky-top navbar-expand-lg bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
        <img src={logo} alt='achieversIT logo'/>
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i className="fas fa-bars"></i>
  </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">

          <li className="nav-item active">            
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
          <Link to="/about-us" className="nav-link">About</Link>
            </li>

            <li className="nav-item">
            <Link to="/products-list" className="nav-link">Products</Link>
              </li>

              <li className="nav-item">
              <Link to="/our-services" className="nav-link">Services</Link>
                </li>

                <li className="nav-item">
                  <Link to="/blog" className="nav-link">Blog</Link>
                </li>

                <li className="nav-item">
                <Link to="/contact-us" className="nav-link">Contact</Link>

                </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}
export default  Header;