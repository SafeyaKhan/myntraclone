// components/CheckoutForm.jsx
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#a0aec0",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); // fixed: renamed to avoid "error is not defined"

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    if (!stripe || !elements) {
      setErrorMessage("Stripe is not loaded yet.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount: 99900 }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
        window.location.href = "/order-confirmation";
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Server error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="mb-4 text-center">Secure Payment</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="card-element" className="form-label">
              Card Details
            </label>
            <div className="form-control p-3" id="card-element">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>
          </div>

          {errorMessage && (
            <div className="text-danger mb-3">{errorMessage}</div>
          )}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="proceed-btn"
              disabled={!stripe || loading}
            >
              {loading ? "Processing…" : "Pay Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
