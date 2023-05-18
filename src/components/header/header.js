import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <img src='https://preview.colorlib.com/theme/megapod/img/logo.png'/>
          <button className="navbar-toggler text-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="bi bi-layout-text-sidebar " />
          
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-white fw-semibold"  to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/episodes'>Episodes</NavLink>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Pages
                </a>
                <ul className="dropdown-menu mt-1 p-3">
                  <li className="dropdown-item text-white">About</li>
                  <li className="dropdown-item text-white" >Episodes</li>
                  <li className="dropdown-item text-white" >Blog</li>
                  <li className="dropdown-item text-white" >Blog Details</li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control bg-dark me-2" type="search" placeholder="Search and hit enter..." aria-label="Search" />
              <button className="btn text-white" type="submit"><i className="bi bi-search"></i></button>
              <button className="btn text-white" type="submit"><i className="bi bi-facebook"></i></button>
              <button className="btn text-white" type="submit"><i className="bi bi-twitter"></i></button>
              <button className="btn text-white" type="submit"><i className="bi bi-browser-edge"></i></button>
              <button className="btn text-white" type="submit"><i className="bi bi-instagram"></i></button>
              <button className="btn text-white" type="submit"><i className="bi bi-dribbble"></i></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
