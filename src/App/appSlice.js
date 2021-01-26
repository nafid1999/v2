import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appState",
  initialState: {
    menuExpanded: false,
    headerExpanded: true,
  },
  reducers: {
    toogleMenu: (state) => ({ ...state, menuExpanded: !state.menuExpanded }),
    setHeaderExpanded: (state, action) => ({
      ...state,
      headerExpanded: action.payload,
    }),
  },
});

export const { toogleMenu, setHeaderExpanded } = appSlice.actions;

export default appSlice.reducer;
