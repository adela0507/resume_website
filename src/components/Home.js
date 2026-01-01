import React from 'react'
import Navbar from './navbar/Navbar.js'
import Profile from './Profile.js'
import About from './pages/about/About'
import Skills from './Skills'
import Experiences from './Experiences'
import Educations from './Educations'
import Portofolios from './Portofolios'

function Home() {
  return (
			<section>
				<Navbar/>
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile/>
						</div>
						<div className='col s12 m9'>
							<About/>
							<Skills/>
							<Experiences />
							<Educations />
							<Portofolios />
						</div>
					</div>
				</div>
			</section>
  )
}

export default Home
