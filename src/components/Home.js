import React from 'react'
import { Navigate } from 'react-router-dom'


const Home = (props) => {
	const { user } = props
	if (user) {
		return(
			<Navigate to='/books' />
		)
	}

	return (
		<>
			<h2>Welcome to The Library!</h2>
			<p>Please sign up or login to see all books</p>
		</>
	)
}

export default Home
