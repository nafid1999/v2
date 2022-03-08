import create from 'zustand'

const themes = ['light', 'dark']
const THEME_VAR_NAME_IN_STORAGE = 'theme'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem(THEME_VAR_NAME_IN_STORAGE) || themes[0],
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === themes[0] ? themes[1] : themes[0]
      localStorage.setItem(THEME_VAR_NAME_IN_STORAGE, newTheme)
      return {
        ...state,
        theme: newTheme,
      }
    })
  },
}))

const NAV_STATE_VAR_NAME_IN_STORAGE = 'navState'

export const useNavStateStore = create((set) => ({
  isOpen:
    localStorage.getItem(NAV_STATE_VAR_NAME_IN_STORAGE) === 'true' || true,
  toggleNavState: () => {
    set((state) => {
      const newIsOpen = !state.isOpen
      localStorage.setItem(NAV_STATE_VAR_NAME_IN_STORAGE, newIsOpen)
      return {
        ...state,
        isOpen: newIsOpen,
      }
    })
  },
}))

export default useThemeStore
