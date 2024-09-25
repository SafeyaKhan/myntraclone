import React from "react";
import { useSelector } from "react-redux";

const AddressDisplay = () => {
  const address = useSelector((state) => state.address.address);
  console.log(address);
  return (
    <div>
      {/* <p>{address || "No address provided."}</p> */}

      <h2>Address:</h2>
      {Object.entries(address).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </p>
      ))}
    </div>
  );
};

export default AddressDisplay;
