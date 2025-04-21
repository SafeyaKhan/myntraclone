const OrderConfirmation = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      <h2>Thank you for your order!</h2>
      <p>Your payment was successful. Your order will be shipped soon.</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="proceed-btn"
      >
        Go to Home
      </button>
    </div>
  );
};

export default OrderConfirmation;
