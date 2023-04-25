 
import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CartState } from "../context/Context";

 const Checkout = () => {
  const {
    state: { cart }
  } = CartState();
  
  const orderTotal = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  
  );
  console.log(orderTotal);
   return (
     <div>
       <PayPalScriptProvider options={{ "client-id": "AVmxyDjO_hq9lHJ2VCQsjJ3wcklPkfn8CmDQAyLL9rwrTUVzOfalvjx70TLAi_lWsV4RHhcpHp1Oe_Of" }}>
         <PayPalButtons />
       </PayPalScriptProvider>
     </div>
   );
 };

 export default Checkout;
