// src/components/Wishlist.js
import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const items = useSelector((state) => state.items);
  // const finalItems = items.filter((item) => {
  //   const itemIndex = wishlist.indexOf(item.id);
  //   return itemIndex >= 0;
  //
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {wishlist.map((item) => (
            <WishlistItem item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
