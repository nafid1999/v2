import axios from 'axios'
import BASE_URL_API from './constants'

const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL_API,
  })
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  instance.interceptors.request.use(async (request) => {
    const token = 'AUTH_TOKEN_KEY'
    if (token) {
      request.headers.common.Authorization = `Bearer ${token}`
    }
    return request
  })
  return instance
}
export default axiosInstance
