import create from 'zustand'
import { configurePersist } from 'zustand-persist'

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null)
  },
  setItem(_key, value) {
    return Promise.resolve(value)
  },
  removeItem() {
    return Promise.resolve()
  },
})

const storage =
  typeof window !== 'undefined' ? localStorage : createNoopStorage()

const { persist } = configurePersist({
  storage: storage,
})

const useUserPreferencesStore = create(
  persist(
    {
      key: 'userPreferences',
    },
    (set) => ({
      theme: 'light',
      navState: false,
      lang: 'fr',
      toggleTheme: () => {
        set((state) => ({
          ...state,
          theme: state.theme === 'dark' ? 'light' : 'dark',
        }))
      },
      toggleNavState: () => {
        set((state) => ({
          ...state,
          navState: !state.navState,
        }))
      },
    }),
  ),
)

export default useUserPreferencesStore
