import React from 'react'
import './Branches.css'
import { branchesDataBaza } from './data'
function Branches() {
	return (
		<div className='Branches_title'>
			<div className='Branches_flex'>
				<div>
					<h2>Branches</h2>
				</div>
				<div className='Branches_btn'>
					<button className='lict'>List</button>
					<button>Map</button>
				</div>
			</div>

			{/* card */}
			{branchesDataBaza.map((item, index) => (
				<div key={index} className='Branches_card'>
					<div className='Branches_flex'>
						<div>
							<h4> {item.name}</h4>
							<p className='Branches_address'>{item.manzil}</p>
						</div>
						<div>
							<p className='Branches_time'>{item.vaqt}</p>
						</div>
					</div>
					<hr />

					<div className='Branches_flex'>
						<div>
							<p>Schedule:</p>
							<p>{item.kun}</p>
						</div>
						<div>
							<p>Phone:</p>
							<p>{item.Phone}</p>
						</div>
					</div>
				</div>
			))}

			{/* <div className='Branches_card'>
				<div className='Branches_flex'>
					<div>
						<h4>MAX WAY AVIASOZLAR</h4>
						<p className='Branches_address'>улица Авиасозлар, 23</p>
					</div>
					<div>
						<p className='Branches_time'>Closed until 10:00</p>
					</div>
				</div>
				<hr />
				<div className='Branches_flex'>
					<div>
						<p>Schedule:</p>
						<p>Mon-Sun: 10:00-03:00</p>
					</div>
					<div>
						<p>Phone:</p>
						<p>+998712005400</p>
					</div>
				</div>
			</div>

			<div className='Branches_card'>
				<div className='Branches_flex'>
					<div>
						<h4>MAX WAY AVIASOZLAR</h4>
						<p className='Branches_address'>улица Авиасозлар, 23</p>
					</div>
					<div>
						<p className='Branches_time'>Closed until 10:00</p>
					</div>
				</div>
				<hr />
				<div className='Branches_flex'>
					<div>
						<p>Schedule:</p>
						<p>Mon-Sun: 10:00-03:00</p>
					</div>
					<div>
						<p>Phone:</p>
						<p>+998712005400</p>
					</div>
				</div>
			</div>

			<div className='Branches_card'>
				<div className='Branches_flex'>
					<div>
						<h4>MAX WAY AVIASOZLAR</h4>
						<p className='Branches_address'>улица Авиасозлар, 23</p>
					</div>
					<div>
						<p className='Branches_time'>Closed until 10:00</p>
					</div>
				</div>
				<hr />
				<div className='Branches_flex'>
					<div>
						<p>Schedule:</p>
						<p>Mon-Sun: 10:00-03:00</p>
					</div>
					<div>
						<p>Phone:</p>
						<p>+998712005400</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Branches
