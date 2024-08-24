import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../context'
import Exit from '../../img/Exiti.png'
import karzin from '../../img/karzin.png'
import kontakta from '../../img/kontakt.png'
import locotsiya from '../../img/locatsiya.png'
import maxlogo from '../../img/logo.png'
import './Main.css'
import { languages, navItems } from './data/Indeks'
function Main() {
	const [openModal, setOpenMadal] = useState(false)
	const [open, setOpen] = useState(false)
	const { total } = useContext(Context)

	return (
		<div>
			<div className='navbar'>
				<div className='navbar_left'>
					<img src={maxlogo} alt='' />
					<nav>
						{navItems?.map(item => (
							<NavLink
								key={item.to}
								to={item.to}
								className={({ isActive }) => (isActive ? 'active' : '')}
							>
								{item.name}
							</NavLink>
						))}{' '}
					</nav>
				</div>
				<div className='navbar_right'>
					<img onClick={() => setOpenMadal(true)} src={locotsiya} alt='' />
					<div>
						<p>Delivery or Takeaway </p>
						<p className='navbar_p'>Select the type of reception</p>
					</div>
					<select className='lang' name='lang' id=''>
						{languages.map(item => (
							<option key={item.value} value={item.value}>
								{item.label}
							</option>
						))}
					</select>
					<NavLink
						to={'/Karzinka'}
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<img src={karzin} alt='' />
					</NavLink>
					<span>{total?.toString()} sum</span>
					<img onClick={() => setOpen(true)} src={kontakta} alt='' />
				</div>
				{/* Modal */}
				{open && (
					// onClick={() => setOpen(false)}
					<div className='madal-section'>
						<div className='modal-box'>
							<img
								onClick={() => setOpen(false)}
								className='madal_img'
								src={Exit}
								alt=''
							/>
							<h3>Sign in</h3>
							<p className='madal_box_text'>Sign in with your phone number</p>
							<label htmlFor='' for='Phone'>
								Phone Number
							</label>
							<div className='modalka_input'>
								<input
									maxLength={13}
									minLength={13}
									placeholder='+998 .. ... .. ..  nmber'
									type='text'
									id='Phone'
								/>
							</div>
							<button onClick={() => setOpen(false)} className='modal-btn'>
								Send code
							</button>
						</div>
					</div>
				)}
				{/* Modal */}
				{openModal && (
					<div className='madal-sectiontu'>
						<div className='madal-title'>
							<div className='madal_flextwo'>
								<div className='madal_left'>
									<h3>Select the type of reception</h3>
									<p>To see your current menu</p>
									<button className='madal_btntwo'>Delivery</button>
									<button>Takeaway</button>
									<input
										className='madal_input'
										placeholder='Search by restaurant name'
										type='text'
									/>
									<div className='address'>
										<div className='address_flex'>
											<img className='madal_locatsiya' src={locotsiya} alt='' />
											<h4 className='madal_title'>MAX WAY ALAYSKIY</h4>
										</div>
										<p className='madal_text'>проспект Амира Темура, 25</p>
										<p className='madal_texttwo'>
											The restaurant will close at 03:00
										</p>
									</div>
								</div>
								<div className='madal_rgiht'>
									<img onClick={() => setOpenMadal(false)} src={Exit} alt='' />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<hr />
		</div>
	)
}

export default Main
