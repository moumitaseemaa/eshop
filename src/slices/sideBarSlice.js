import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    showSideBar: (state) => {
      state.value = true;
    },
    hideSideBar: (state) => {
      state.value = false;
    },
  },
});

export const { showSideBar,hideSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;
