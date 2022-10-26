import apiUrl from '../apiConfig'
import axios from 'axios'

export const bookCreate = (data, user) => {
	return axios({
		method: 'POST',
        headers: {
			Authorization: `Token token=${user.token}`,
		},
		url: apiUrl + '/books',
		data: {
			book: data
		}
	})
}