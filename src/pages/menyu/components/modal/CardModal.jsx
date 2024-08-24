import React from 'react'
import CounterButton from '../../../../components/counter-btn/CounterButton'
import Exit from '../../../../img/Exiti.png'

const CardModal = ({ data, setData, modalData, setOpenMadall }) => {
	return (
		<div className='modal'>
			<div className='modal_title'>
				<div className='modal_flex'>
					<div className='modal_main'>
						<img className='modal_img' src={modalData?.img} alt='' />
						<div>
							<h5>{modalData?.name}</h5>
							<p>{modalData?.description}</p>
							<div className='counter_flex'>
								<CounterButton
									data={data}
									setData={setData}
									item={modalData}
									setOpenMadall={setOpenMadall}
								/>
								<div>
									<button className='couter_btn'>2000 sum</button>
								</div>
							</div>
						</div>
					</div>

					<div className='modal_text'>
						<img
							className='modal_exit'
							onClick={() => setOpenMadall(false)}
							src={Exit}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardModal
