import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "63701cc1f03239b7f700000e",
  user: '',
  token: ''
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },setLogout: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});


export const { setLogin, setLogout}  =authSlice.actions;
export default authSlice.reducer;