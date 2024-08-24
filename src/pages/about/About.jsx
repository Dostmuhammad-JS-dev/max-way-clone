import React from 'react'
import './About.css'
import abour from '../../img/about.webp'
function About() {
	return (
		<div>
			<h4>About company</h4>
			<img className='about_img' src={abour} alt='' />
			<p className='about_text'>
				The company was founded in February 2005 in Tashkent.
				<br /> At the moment, the company has 20 branches in Tashkent.
				<br />
				<br /> The menu consists mainly of club sandwiches, hot dogs, burgers,
				pita bread and donars. <br />
				Our priorities are the freshness and quality of ingredients, variety of
				toppings, affordable prices and attention to guests' requests.
				<br /> Every day, a large number of different people order from MaxWay.{' '}
				<br />
				And we try to increase both the number of visitors and the number of
				branches. With each cooked dish, we refine the details of original
				recipes and look for the perfect balance of price and continue to be
				your favorite brand.
				<br /> If suddenly you are faced with poor service or low quality of
				cooked food from our side, be sure to write to us at
				@maxwaymasterfood_bot.
				<br /> We gladly accept both positive and negative feedbacks. A guest's
				complaint is a gift, thanks to which we have room to grow.
			</p>
		</div>
	)
}

export default About
