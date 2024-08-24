import { createContext, useState } from 'react'

export const Context = createContext()

export const MyContextProvider = ({ children }) => {
	const [total, setTotal] = useState(0)

	const totalPrice = data => {
		const t = data?.reduce(
			(acc, cur) => acc + Number(cur.price) * Number(cur.count),
			0
		)
		setTotal(t)
	}

	return (
		<Context.Provider value={{ total, totalPrice }}>
			{children}
		</Context.Provider>
	)
}
