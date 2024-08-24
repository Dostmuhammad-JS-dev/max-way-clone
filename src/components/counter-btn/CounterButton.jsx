import React, { useContext } from 'react'
import { Context } from '../../context'

const CounterButton = ({ data, item, setData, setOpenMadall }) => {
	const { totalPrice } = useContext(Context)

	const handleClick1 = item => {
		const arr = []
		if (data?.length > 1) {
			data.forEach(i => {
				if (i.name !== item.name) {
					return arr.push(i)
				}
				i.count++
				arr.push(i)
			})
		}
		localStorage.setItem('products', JSON.stringify(arr))
		setData(JSON.parse(localStorage.getItem('products')))
		totalPrice(arr)
	}

	const handleClick2 = item => {
		const brr = []
		if (data?.length > 1) {
			data.forEach(n => {
				if (n.id !== item.id) {
					return brr.push(n)
				}
				n.count--
				n.count === 0 ? setOpenMadall && setOpenMadall(false) : brr.push(n)
			})
		}
		localStorage.setItem('products', JSON.stringify(brr))
		setData(JSON.parse(localStorage.getItem('products')))
		totalPrice(brr)
	}
	return (
		<div className='Counter_flex'>
			<div className='counter_flexp'>
				<h5 onClick={() => handleClick2(item)}>-</h5>
				<h5>{data?.find(dat => dat?.id === item?.id)?.count}</h5>
				<h5 onClick={() => handleClick1(item)}>+</h5>
			</div>
		</div>
	)
}

export default CounterButton
