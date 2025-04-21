import { useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(itemsActions.searchItems(query)); // 🔥 Dispatch search action
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
