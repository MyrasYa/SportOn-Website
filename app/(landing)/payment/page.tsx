import PaymentOptions from "../components/payment/payment-options";
import PaymentSteps from "../components/payment/payment-steps";

const Payment = () => {
  return (
    <main className="container mx-auto bg-gray-100 min-h-[80vh] mb-20 pt-13">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center mb-11">Payment</h1>
        <div className="grid grid-cols-2 gap-14">
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  );
};

export default Payment;
