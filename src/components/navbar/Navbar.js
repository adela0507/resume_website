import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="light-blue darken-4">
        <div className="container">
            <div className="nav-wrapper">
            <Link to="/" className='brand-logo' > My resume</Link>
            <Link to="/" data-target="side-nav" className='sidenav-trigger' >
            <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
                <li>
                    <Link to='/'>
                    <i className='fas fa-home'>Home</i>
                    </Link>
                </li>
                <li>
                    <Link to='/skills'>
                    <i className='fas fa-copy'>Skills</i>
                    </Link>
                </li>
                <li>
                    <Link to='/experiences'>
                    <i className='fas fa-id-badge'>Experiences</i>
                    </Link>
                </li>
                <li>
                    <Link to='/educations'>
                    <i className='fas fa-graduation-cap'>Educations</i>
                    </Link>
                </li>
                <li>
                    <Link to='/portofolio'>
                    <i className='fas fa-address-card'>Portofolios</i>
                    </Link>
                </li>
            </ul>
            </div>
        </div>
      </nav>
      <ul className="sidenav" id='side-nav'>
                <li>
                    <Link to='/'>
                    <i className='fas fa-home'>Home</i>
                    </Link>
                </li>
                <li>
                    <Link to='/skills'>
                    <i className='fas fa-copy'>Skills</i>
                    </Link>
                </li>
                <li>
                    <Link to='/experiences'>
                    <i className='fas fa-id-badge'>Experiences</i>
                    </Link>
                </li>
                <li>
                    <Link to='/educations'>
                    <i className='fas fa-graduation-cap'>Educations</i>
                    </Link>
                </li>
                <li>
                    <Link to='/portofolio'>
                    <i className='fas fa-address-card'>Portofolios</i>
                    </Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar
