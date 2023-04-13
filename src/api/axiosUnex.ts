import axios from 'axios'

const axiosUnex = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
})

export default axiosUnex
