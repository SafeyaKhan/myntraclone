import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const filteredItems = useSelector((store) => store.items.filteredItems);

  return (
    <div>
      <div className="items-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <HomeItem key={item.id} item={item} />)
        ) : (
          <p>No items match your filters.</p>
        )}
      </div>
    </div>
  );
};
export default Home;
