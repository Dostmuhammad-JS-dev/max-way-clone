import React from 'react'
import Slider from 'react-slick'
import { sliderItems } from '../../data'

const SliderComponent = () => {
	var settings = {
		dots: false,
		infinite: false,
		speed: 800,
		slidesToShow: 7,
		slidesToScroll: 1,
	}
	return (
		<Slider className='app' {...settings}>
			{sliderItems.map(item => (
				<a className='slider-item' href={`#${item.id}`} key={item.id}>
					{item.name}
				</a>
			))}
		</Slider>
	)
}

export default SliderComponent
