import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { removeItemFromWishlist } from "../store/wishlistSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item));
  };
  return (
    <div className="item-container">
      <div className="image-container">
        <img className="item-image" src={item.image} alt="item image" />

        <button onClick={handleRemoveFromWishlist}>
          <FaHeart className="icon" color="red" />
        </button>
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>
    </div>
  );
};
export default WishlistItem;
