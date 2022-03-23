import { SSRCookies } from '@react-keycloak/ssr'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL_API
axios.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${SSRCookies().getTokens()?.token}`
  return config
})
export default axios
