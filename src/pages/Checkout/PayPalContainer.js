import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";
import { PAYPAL_CLIENT_ID } from "../../utils/constants";

const PayPalContainer = () => {
  return (
    <div className="payment-container">
      <PayPalScriptProvider
        options={{
          "client-id": PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalContainer;
