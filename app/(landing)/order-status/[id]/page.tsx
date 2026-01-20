"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submitted";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(true);

  return (
    <main className="container mx-auto bg-gray-100 min-h-[80vh] mb-20">
      <div className="max-w-5xl mx-auto py-20 ">
        <h1 className="font-bold text-5xl text-center mb-11">Order Status</h1>
        {
          isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />
        }
      </div>
    </main>
  );
};

export default OrderStatus;
