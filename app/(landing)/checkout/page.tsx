"use client"

import OrderInformation from "@/app/(landing)/components/checkout/order-information";
import CartItems from "../components/checkout/cart-items";
import { useState } from "react";
import { CustomerInfo, useCartStore } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/navigation";


const Checkout = () => {

  const {push} = useRouter();
  const {customerInfo, setCustomerInfo} = useCartStore();
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: null,
    customerAddress: "",
  });

  
  const handlePayment = () => {
    if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
      alert("Please fill in all fields")
      return;
    }

    setCustomerInfo(formData);
    push("/payment");
  };


  return (
    <main className="container mx-auto bg-gray-100 min-h-[80vh] mb-20 pt-13">
      <div className="max-w-5xl mx-auto py-20">
        <h1 className="font-bold text-5xl text-center mb-11">Checkout Now</h1>
        <div className="grid grid-cols-2 gap-14">
          <OrderInformation formData={formData} setFormData={setFormData}/>
          <CartItems handlePayment={handlePayment}/>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
