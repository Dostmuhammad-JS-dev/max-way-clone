import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/main/Main'
import { Menyu, Contacts, Branches, About } from './pages/Pages'
import Karzinka from './pages/karzinka/Karzinka'
import End from './components/end/End'
function App() {
	return (
		<BrowserRouter>
			<div>
				<Main></Main>
			</div>
			<div>
				<Routes>
					<Route path='/' element={<Menyu />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/branchs' element={<Branches />} />
					<Route path='/about' element={<About />} />
					<Route path='/Karzinka' element={<Karzinka />} />
				</Routes>
			</div>
			<End />
		</BrowserRouter>
	)
}

export default App
