import apiUrl from '../apiConfig'
import axios from 'axios'

export const bookIndex = (user) => {
	return axios({
		method: 'GET',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: apiUrl + '/books',
	})
}

export const bookCreate = (newBook, user) => {
	return axios({
		method: 'POST',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: apiUrl + '/books',
		data: {
			book: newBook
		}
	})
}



export const bookShow = (user, bookId) => {
	return axios({
		method: 'GET',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: apiUrl + `/books/${bookId}`,
	})
}

export const bookUpdate = (book,user, bookId) => {
	return axios({
		method: 'PATCH',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: apiUrl + `/books/${bookId}`,
		data: {
			book: book
		}
	})
}