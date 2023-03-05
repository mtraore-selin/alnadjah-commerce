import React, { useState } from "react";
import PayPalContainer from "./PayPalContainer";
import StripeContainer from "./StripeContainer";

const CheckoutContainer = () => {
  const [isPayPalPayment, setIsPayPalPayment] = useState(true);

  return (
    <>
      {isPayPalPayment ? <PayPalContainer /> : <StripeContainer />}
      <button
        type="button"
        className="checkout-btn text-white bg-orange fw-5"
        style={{
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
        }}
        onClick={() => setIsPayPalPayment((prev) => !prev)}
      >
        Choice {isPayPalPayment ? "Stripe" : "PayPal"}
      </button>
    </>
  );
};

export default CheckoutContainer;
