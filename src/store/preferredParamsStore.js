import create from 'zustand'
import { defaultLang, langs } from '../config/langConfig'
import {
  THEME_VAR_NAME_IN_STORAGE,
  NAV_STATE_VAR_NAME_IN_STORAGE,
  LANG_VAR_NAME_IN_STORAGE,
} from '../config/localStorageVarNames'
import { themes } from '../config/materialUiConfig'
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorageUtils'

export const useThemeStore = create((set) => ({
  theme: getFromLocalStorage(THEME_VAR_NAME_IN_STORAGE) || themes[0],
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === themes[0] ? themes[1] : themes[0]
      saveToLocalStorage(THEME_VAR_NAME_IN_STORAGE, newTheme)
      return {
        ...state,
        theme: newTheme,
      }
    })
  },
}))

export const useNavStateStore = create((set) => ({
  isOpen: getFromLocalStorage(NAV_STATE_VAR_NAME_IN_STORAGE) === 'true' || true,
  toggleNavState: () => {
    set((state) => {
      const newIsOpen = !state.isOpen
      saveToLocalStorage(NAV_STATE_VAR_NAME_IN_STORAGE, newIsOpen)
      return {
        ...state,
        isOpen: newIsOpen,
      }
    })
  },
}))

export const useLangStore = create((set) => ({
  currentLang: getFromLocalStorage(LANG_VAR_NAME_IN_STORAGE) || defaultLang,
  allLangs: langs,
  changeLang: (newLang) => {
    saveToLocalStorage(LANG_VAR_NAME_IN_STORAGE, newLang)
    set((state) => ({
      ...state,
      currentLang: newLang,
    }))
  },
}))
