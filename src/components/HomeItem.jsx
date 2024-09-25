import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSLice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../store/wishlistSlice";

const Home = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const isInWishlist = wishlist.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist(item));
  };

  const handleRemoveFromWishlist = () => {
    dispatch(removeItemFromWishlist(item));
  };

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <div className="image-container">
        <img className="item-image" src={item.image} alt="item image" />

        {isInWishlist ? (
          <button onClick={handleRemoveFromWishlist}>
            <FaHeart className="icon" color="red" />
          </button>
        ) : (
          <button onClick={handleAddToWishlist}>
            <FaRegHeart className="icon" />
          </button>
        )}
      </div>

      <div className="rating">
        {item.rating.stars} | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

      {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemove}
        >
          <FaTrashAlt style={{ marginRight: "5px" }} />
          Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <IoIosAddCircleOutline style={{ marginRight: "5px" }} />
          Add To Bag
        </button>
      )}
    </div>
  );
};
export default Home;
