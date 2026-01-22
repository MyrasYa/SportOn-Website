import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";
import { getTransactionById } from "@/app/services/transaction.service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";

const OrderStatus = async ({params}: TPageProps) => {
  const {id} = await params
  const transaction = await getTransactionById(id)
  console.log("transaction: ", transaction)

  return (
    <main className="container mx-auto bg-gray-100 min-h-[80vh] mb-20 pt-13">
      <div className="max-w-5xl mx-auto py-20 ">
        <h1 className="font-bold text-5xl text-center mb-11">Order Status</h1>
        {
          transaction.status === "paid" && <OrderConfirmed /> 
        }
        {
          transaction.status === "pending" && <OrderSubmitted /> 
        }
        {
          transaction.status === "rejected" && <OrderRejected /> 
        }
      </div>
    </main>
  );
};

export default OrderStatus;
