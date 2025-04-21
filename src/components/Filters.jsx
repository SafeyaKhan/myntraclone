import { useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { useState } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const [company, setCompany] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  const handleFilter = () => {
    console.log("Applying Filters:", {
      company,
      minPrice,
      maxPrice,
      minRating,
    });

    dispatch(
      itemsActions.filterItems({
        company: company || null,
        minPrice: minPrice || null,
        maxPrice: maxPrice || null,
        minRating: minRating || null,
      })
    );
  };

  return (
    <div className="filter-container">
      {/* Brand Filter */}
      <select onChange={(e) => setCompany(e.target.value)}>
        <option value="">All Brands</option>
        <option value="ADIDAS">ADIDAS</option>
        <option value="Nike">Nike</option>
        <option value="Roadster">Roadster</option>
        <option value="Nivea">Nivea</option>
      </select>

      {/* Price Filter */}
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      {/* Rating Filter */}
      <select onChange={(e) => setMinRating(e.target.value)}>
        <option value="">Min Rating</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
        <option value="2">2+ Stars</option>
      </select>

      {/* Apply Filter */}
      <button onClick={handleFilter} className="search-btn">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
