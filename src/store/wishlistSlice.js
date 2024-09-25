// src/features/wishlist/wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
      // Check if the item already exists in the wishlist
      const itemExists = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.wishlist.push(action.payload); // Add new item if not in wishlist
      }
    },
    removeItemFromWishlist: (state, action) => {
      // Filter out the item from the wishlist
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
