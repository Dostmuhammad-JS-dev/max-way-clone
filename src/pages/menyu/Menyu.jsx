/* eslint-disable no-const-assign */
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/index.js'
import { MenuDataBaza } from '../../data/menu-data-baza.js'
import Card from './components/card/Card.jsx'
import Carusel from './components/carusel/Carusel'
import CardModal from './components/modal/CardModal.jsx'
import SliderComponent from './components/slider/Slider'
import { defaultKorzinkaData } from './data'
import './Menyu.css'

function Menyu() {
	const { totalPrice } = useContext(Context)
	const [data, setData] = useState([])
	const [openModal, setOpenMadall] = useState(false)
	const [modalData, setModalData] = useState([])

	useEffect(() => {
		var productList = JSON.parse(localStorage.getItem('products'))
		if (productList?.length) {
			setData(productList)
			totalPrice(productList)
		} else {
			setData([defaultKorzinkaData])
			localStorage.setItem('products', JSON.stringify([defaultKorzinkaData]))
			totalPrice([defaultKorzinkaData])
		}
	}, [])

	const addToCart = newdata => {
		var isBuget = data.filter(item => item.id === newdata.id)
		var filterBuget = data.filter(item => item.id !== newdata.id)

		if (isBuget.length) {
			localStorage.setItem(
				'products',
				JSON.stringify([
					...filterBuget,
					{ ...isBuget[0], count: isBuget[0].count + 1 },
				])
			)
			setData([...filterBuget, { ...isBuget[0], count: isBuget[0].count + 1 }])
			totalPrice([
				...filterBuget,
				{ ...isBuget[0], count: isBuget[0].count + 1 },
			])
		} else {
			localStorage.setItem('products', JSON.stringify([...data, newdata]))
			setData([...data, newdata])
			totalPrice([...data, newdata])
		}
	}
	return (
		<div>
			<Carusel />
			<SliderComponent />

			{MenuDataBaza.map((item, index) => (
				<div className='mb-4' key={index}>
					<h3 className='mb-4' id={item.id}>
						{item.title}
					</h3>
					<div className='Card_new row row-gap-4'>
						{item.data_baza.map((item, index) => (
							<Card
								key={index}
								item={item}
								setModalData={setModalData}
								setOpenMadall={setOpenMadall}
								data={data}
								setData={setData}
								addToCart={addToCart}
							/>
						))}
					</div>
				</div>
			))}

			{openModal && (
				<CardModal
					modalData={modalData}
					setData={setData}
					setOpenMadall={setOpenMadall}
					data={data}
				/>
			)}
		</div>
	)
}

export default Menyu
