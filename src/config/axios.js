import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL_API

export default axios
