export const inServer = typeof window === 'undefined'

export const getFromLocalStorage = (key) => {
  if (!inServer) return localStorage.getItem(key)
  return null
}
export const saveToLocalStorage = (key, value) => {
  if (!inServer) localStorage.setItem(key, value)
}
