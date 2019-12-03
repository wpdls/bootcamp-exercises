import React, { useState } from 'react'

const App = props => {
	const [checked, setChecked] = useState(false)
	const [name, setName] = useState('Tim')

	const onCheckboxChange = () => {
		setChecked(prevChecked => {
			return !prevChecked
		})
	}
	return (
		<div className='app'>
			<h1>Checked?</h1>
			<div className='double'>
				<input
					name='checkbox'
					type='checkbox'
					checked={checked}
					onChange={onCheckboxChange}
				/>
			</div>
		</div>
	)
}


export default App
