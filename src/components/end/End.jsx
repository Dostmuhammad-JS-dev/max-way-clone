import React from 'react'
import { NavLink } from 'react-router-dom'
import fecebok from '../../img/facebookk.webp'
import instagram from '../../img/instagram.png'
import logo from '../../img/logo.png'
import youtube from '../../img/youtube.jpeg'
import './End.css'
function End() {
	return (
		<div className='End'>
			<hr />
			<div className='End_title'>
				<NavLink to={'/'}>
					<img src={logo} alt='' className='logo' />
				</NavLink>

				<nav className='End_link'>
					<NavLink to={'/branchs'}>Branches</NavLink>
					<NavLink to={'/about'}>About</NavLink>
					<NavLink to={'/contacts'}>Contacts</NavLink>
				</nav>
			</div>
			<hr />
			<div className='futer'>
				<div className='futer_left'>
					<p> Delever 2020 - 2024 All rights reserved</p>
				</div>

				<div className='futer_right'>
					<img src={instagram} alt='' />
					<img src={fecebok} alt='' />
					<img src={youtube} alt='' />
				</div>
			</div>
		</div>
	)
}

export default End
