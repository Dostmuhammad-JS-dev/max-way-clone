import React from 'react'
import { navItems } from '../../data/Indeks.js'
function Navlink() {
	return (
		<nav>
			{navItems.map(item => (
				<Navlink to={item.to} className={item.className} key={item.to}>
					{item.name}
				</Navlink>
			))}
		</nav>
	)
}

export default Navlink
