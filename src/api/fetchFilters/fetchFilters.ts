import axios from 'axios'

export const fetchData = async () => {
	const response = await axios.get('/data/filterData.json')
	return response.data
}
