import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { STRIPE_PUBLISHABLE_KEY } from "../../utils/constants";
import Payment from "./Payment";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default StripeContainer;
