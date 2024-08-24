import React, { useContext, useEffect, useState } from 'react'
import CounterButton from '../../components/counter-btn/CounterButton'
import { Context } from '../../context'
import './Karzinka.css'
function Karzinka() {
	const [data, setData] = useState([])
	const { totalPrice, total } = useContext(Context)

	useEffect(() => {
		setData(JSON.parse(localStorage.getItem('products')))
		totalPrice(JSON.parse(localStorage.getItem('products')))
	}, [])

	return (
		<div>
			<h4>Cart</h4>
			<div className='shop'>
				<div className='shop_lef_title'>
					{data?.map((item, index) => (
						<div className='shop_lef_title_sub' key={index}>
							<div className='Packet_flex'>
								<div className='shop-imgtwo'>
									<img className='shop_img' src={item?.img} alt='' />
								</div>
								<div>
									<h6 className='Packet'>{item?.name}</h6>
									<p className='Packet_title'>{item?.desc}</p>
								</div>
							</div>

							<div className='Counter_flex'>
								<CounterButton data={data} setData={setData} item={item} />
								<h5 className='countertwo'>
									{item?.count * Number(item?.price)} sum
								</h5>
							</div>
						</div>
					))}
				</div>
				<div className='Shop_rghit'>
					<h4>Total</h4>
					<div className='Total_flex'>
						<div className='Total_tex'>
							<p>Products</p>
							<p>Delivery</p>
						</div>
						<div className='Total_sum'>
							<p>32 000 sum</p>
							<p>0 sum</p>
						</div>
					</div>
					<hr />
					<div className='pay_flex'>
						<p>To pay</p>
						<p>{total} sum</p>
					</div>
					<button className='Total_btn'> Go to checkout</button>
				</div>
			</div>
		</div>
	)
}

export default Karzinka
