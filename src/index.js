import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { MyContextProvider } from './context'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='contayner'>
		<MyContextProvider>
			<App />
		</MyContextProvider>
	</div>
)
