import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    clearAddress: (state) => {
      state.address = "";
    },
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
