import OrderInformation from "@/app/(landing)/components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";

const Checkout = () => {
  return (
    <main className="container mx-auto bg-gray-100 min-h-[80vh] mb-20">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation/>
          <CartItems/>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
