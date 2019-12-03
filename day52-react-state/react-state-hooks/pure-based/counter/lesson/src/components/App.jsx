import React, { useState, useEffect } from 'react'

const App = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
		.then(res => res.json())
		.then(users => {
			setUsers(users)
		})
	}, [])

	return (
		<div className='app'>
			{users.map(user => {
				return (
					<div>
						{user.name}
					</div>
				)
			})}
		</div>
	)
}

export default App
