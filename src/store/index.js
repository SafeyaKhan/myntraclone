import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSLice";
import addressReducer from "./addressSlice";
import wishlistReducer from "./wishlistSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
    address: addressReducer,
    wishlist: wishlistReducer,
  },
});
export default myntraStore;
