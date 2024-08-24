import React from 'react'
import CounterButton from '../../../../components/counter-btn/CounterButton'

const Card = ({
	item,
	setModalData,
	setOpenMadall,
	data,
	setData,
	addToCart,
}) => {
	const handleClick = () => {
		setModalData(item)
		setOpenMadall(true)
	}

	const countVal = data?.find(dat => dat.id === item.id)?.count
	return (
		<div className='New_card col-lg-3 col-md-4 col-sm-6 col-12'>
			<img
				className='card_img'
				src={item.img}
				alt={item.name}
				onClick={handleClick}
			/>
			<div className='New_card_head'>
				<h5 onClick={handleClick}>{item.name}</h5>
				<p className='description' onClick={handleClick}>
					{item.description}
				</p>
				<div className='New_card_title'>
					<h5 onClick={handleClick}>
						{item.price} <span> sum</span>
					</h5>
					{countVal > 0 ? (
						<CounterButton
							data={data}
							setData={setData}
							item={item}
							setOpenMadall={setOpenMadall}
						/>
					) : (
						<button
							className='Card_btn'
							onClick={() => addToCart({ ...item, count: 1 })}
						>
							Add
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Card
