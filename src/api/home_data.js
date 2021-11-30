import { getRequest } from "network/axios"

export const getHomeData = () => {
	return getRequest('http://123.207.32.32:8000/home/multidata')
}