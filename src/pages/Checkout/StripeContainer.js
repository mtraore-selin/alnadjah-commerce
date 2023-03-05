import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import Payment from "./Payment";
import PayPalContainer from "./PayPalContainer";

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51MLuWBGTv42D0AkKDSyzyD7pIrOnYDk1o5RVUypgNriNIj2jF0DexKPeqLZL17MsRyq2HLnCW70ip5vqwD1OCQGR00EPjLtlPB";

const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default StripeContainer;
