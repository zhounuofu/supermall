import axios from 'axios';

axios.interceptors.request.use(config => {
	return config;
}, err => {
	return err;
})

axios.interceptors.response.use(response => {
	const data = response.data;
	return data;
})

export const getRequest = (url) => {
	return axios({
		method: 'get',
		url: url
	})
}