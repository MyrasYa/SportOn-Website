"use client";

import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
  return (
    <div className="bg-white max-w-160 p-16 flex justify-center items-center flex-col mx-auto">
      <div className="w-18 h-18 bg-primary-light rounded-full mx-auto p-1 flex justify-center items-center mb-3">
        <FiAlertCircle size={52} className="text-primary"/>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Order Rejected</h2>
      <p className="text-center mb-8 text-gray-600 ">
        I'm sorry your order is rejected, because it has problems in this
        transaction
      </p>
    </div>
  );
};

export default OrderRejected;
