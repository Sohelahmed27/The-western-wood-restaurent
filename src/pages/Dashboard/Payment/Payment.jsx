import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_token);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle
        heading={"payment"}
        subHeading={"Please process"}
      ></SectionTitle>
      {/* <h2 className="text-3xl text-center">Payment !!</h2> */}
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
