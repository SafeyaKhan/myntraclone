import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch } from "react-redux";
import { setAddress } from "../store/addressSlice";
import AddressDisplay from "../components/AddressDisplay";

const Address = () => {
  // const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    /* e.preventDefault();
    alert(`Phone number: ${phone}`); */

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.street) formErrors.street = "Street address is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.state) formErrors.state = "State is required";
    if (!formData.postalCode) formErrors.postalCode = "Postal code is required";
    if (!formData.country) formErrors.country = "Country is required";
    if (!formData.phone) formErrors.phone = "Phone is required";
    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setAddress(formData));
    setFormData("");

    if (validateForm()) {
      alert("Address submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div className="container mt-4 col-md-6 mx-auto">
      <h1 className="ms-5">Add Address</h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="mb-3 ">
          <label htmlFor="street" className="form-label mt-4">
            Street Address
          </label>
          <input
            type="text"
            id="street"
            name="street"
            className="form-control w-50"
            value={formData.street}
            onChange={handleChange}
          />
          {errors.street && (
            <small className="text-danger">{errors.street}</small>
          )}
        </div>
        <div className="mb-3 ">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-control w-50"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <small className="text-danger">{errors.city}</small>}
        </div>
        <div className="mb-3 ">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="form-control w-50"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && (
            <small className="text-danger">{errors.state}</small>
          )}
        </div>
        {/* <div className="mb-3 ">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <PhoneInput
            country={"us"} // Default country, change as needed
            value={phone}
            onChange={setPhone}
            inputClass="form-control w-50"
          />
        </div> */}
        <div className="mb-3 ">
          <label htmlFor="postalCode" className="form-label">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            className="form-control w-50"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && (
            <small className="text-danger">{errors.postalCode}</small>
          )}
        </div>
        <div className="mb-3 ">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control w-50"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="form-control w-50"
            value={formData.country}
            onChange={handleChange}
          />
          {errors.country && (
            <small className="text-danger">{errors.country}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary ms-5">
          Submit
        </button>
      </form>

      <AddressDisplay />
    </div>
  );
};

export default Address;
