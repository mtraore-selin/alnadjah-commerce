import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React from "react";

const PayPalContainer = () => {
  return (
    <div className="payment-container">
      <PayPalScriptProvider
        options={{
          "client-id":
            "ATcF3MRVgSq7zAnQuKl3SPYnUPD_pAaLPNjTGjo1KMuNwkWGCJmJ7Kq50t-bw25-TbHupA8kB0zzUQ-q",
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
