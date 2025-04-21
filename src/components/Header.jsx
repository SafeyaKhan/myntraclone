import { IoPersonSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Filters from "../components/Filters";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("Bag conatins", bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
              style={{ marginLeft: "-15px" }}
            />
          </Link>
        </div>

        <SearchBar />
        <Filters />

        <div style={{ marginTop: "15px", marginRight: "10px" }}>
          <div className="action_bar">
            <div className="action_container">
              <IoPersonSharp />
              <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
              <FaHeart />
              <Link className="action_container" to="/wishlist">
                Wishlist
              </Link>
            </div>

            <Link className="action_container" to="/bag">
              <IoBagSharp />
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
