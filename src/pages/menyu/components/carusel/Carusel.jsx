import React from 'react'
import carusel1 from '../../../../img/carusel1.webp'
import carusel2 from '../../../../img/Carusel2.webp'
import carusel3 from '../../../../img/carusel3.webp'

const Carusel = () => {
	return (
		<div id='carouselExampleIndicators' className='carousel slide'>
			<div className='carousel-indicators'>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to='0'
					className='active'
					aria-current='true'
					aria-label='Slide 1'
				></button>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to='1'
					aria-label='Slide 2'
				></button>
				<button
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide-to='2'
					aria-label='Slide 3'
				></button>
			</div>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src={carusel1} className='d-block w-100' alt='...' />
				</div>
				<div className='carousel-item'>
					<img src={carusel2} className='d-block w-100' alt='...' />
				</div>
				<div className='carousel-item'>
					<img src={carusel3} className='d-block w-100' alt='...' />
				</div>
			</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleIndicators'
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleIndicators'
				data-bs-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
		// <div
		// 	id='carouselExampleSlidesOnly'
		// 	className='carousel slide'
		// 	data-bs-ride='carousel'
		// >
		// 	<div className='carousel-inner'>
		// 		<div className='carousel-item active'>
		// 			<img src={carusel1} className='d-block w-100' alt='...' />
		// 		</div>
		// 		<div className='carousel-item'>
		// 			<img src={carusel3} className='d-block w-100' alt='...' />
		// 		</div>
		// 		<div className='carousel-item'>
		// 			<img src={carusel2} className='d-block w-100' alt='...' />
		// 		</div>
		// 	</div>
		// 	<button
		// 		className='carousel-control-prev'
		// 		type='button'
		// 		data-bs-target='#carouselExampleInterval'
		// 		data-bs-slide='prev'
		// 	>
		// 		<span className='carousel-control-prev-icon' aria-hidden='true'></span>
		// 		<span className='visually-hidden'>Previous</span>
		// 	</button>
		// 	<button
		// 		className='carousel-control-next'
		// 		type='button'
		// 		data-bs-target='#carouselExampleInterval'
		// 		data-bs-slide='next'
		// 	>
		// 		<span className='carousel-control-next-icon' aria-hidden='true'></span>
		// 		<span className='visually-hidden'>Next</span>
		// 	</button>
		// </div>
	)
}

export default Carusel
