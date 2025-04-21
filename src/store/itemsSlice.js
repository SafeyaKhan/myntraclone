import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: { allItems: [], filteredItems: [] },
  reducers: {
    addInitialItems: (state, action) => {
      state.allItems = action.payload;
      state.filteredItems = action.payload; // ✅ Ensure both are set
    },
    filterItems: (state, action) => {
      const { company, minPrice, maxPrice, minRating } = action.payload;

      console.log("Filter Action Triggered!", action.payload);

      if (!Array.isArray(state.allItems)) {
        console.error("allItems is not an array:", state.allItems);
        return;
      }

      state.filteredItems = state.allItems.filter((item) => {
        const meetsCompany = !company || item.company === company;
        const meetsMinPrice =
          !minPrice || item.current_price >= parseInt(minPrice);
        const meetsMaxPrice =
          !maxPrice || item.current_price <= parseInt(maxPrice);
        const meetsMinRating =
          !minRating || item.rating.stars >= parseFloat(minRating);

        return meetsCompany && meetsMinPrice && meetsMaxPrice && meetsMinRating;
      });

      console.log("Filtered Items:", state.filteredItems);
    },

    searchItems: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.allItems.filter(
        (item) =>
          item.item_name.toLowerCase().includes(searchTerm) ||
          item.company.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
